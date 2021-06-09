using Messenger.Data;
using Messenger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServersController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Server>>> Get()
        {
            var servers = await _context.Servers.Include(s => s.Chats).ThenInclude(c => c.Messages).OrderBy(s => s.Name).ToListAsync();

            return servers;
        }

        // GET api/Server/id
        [HttpGet("{id}")]
        public async Task<ActionResult<Server>> Get(int id)
        {
            var server = await _context.Servers.Include(s => s.Chats).FirstOrDefaultAsync(s => s.Id == id);

            if(server == null)
            {
                return NotFound();
            }

            return server;
        }

        // ПРОВЕРИТЬ //
        // POST api/Server
        [HttpPost]
        public async Task<ActionResult<Server>> Post([FromBody] string Name)
        {
            var server = new Server() { Name = Name };
            _context.Servers.Add(server);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServer", new { ServerId = server.Id }, server);
        }

        // ПРОВЕРИТЬ
        // PUT api/Server/id
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, Server server)
        {
            if (id != server.Id)
            {
                return BadRequest();
            }

            _context.Entry(server).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // ПРОВЕРИТЬ
        // DELETE api/Server/id
        [HttpDelete("{id}")]
        public async Task<ActionResult<Server>> Delete(string id)
        {
            var server = await _context.Servers.FindAsync(id);
            
            if(server == null)
            {
                return NotFound();
            }

            _context.Servers.Remove(server);
            await _context.SaveChangesAsync();

            return server;
        }

        private bool ServerExists(int id)
        {
            return _context.Servers.Any(e => e.Id == id);
        }
    }
}
