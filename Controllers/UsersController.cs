﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Messenger.Data;
using Messenger.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Messenger.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UsersController(ApplicationDbContext context)
        {
            _context = context;
        }

        // ПРОВЕРИТЬ
        // GET: api/UsersServer/ServerId
        [Route("api/UsersServer/")]  
        [HttpGet("{ServerId}")]
        public async Task<ActionResult<IEnumerable<ApplicationUser>>> GetUsersByServer(string ServerId)
        {
            //var users = await _context.Servers.Where(s => s.ServerId == ServerId).Select(s => s.Users).ToListAsync();
            var users = await _context.Users.Include(u => u.Servers.Where(s => s.ServerId == ServerId)).ToListAsync();
            if (users == null)
            {
                return NotFound();
            }
            return users;
        }

        // GET: api/Users/Id
        [HttpGet("{Id}")]
        public async Task<ActionResult<ApplicationUser>> GetUser(string Id)
        {
            var user = await _context.Users
                .Where(u => u.Id == Id)
                .FirstOrDefaultAsync();

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // PUT: api/Users/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(string id, ApplicationUser user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // POST: api/Users
        [HttpPost]
        public async Task<ActionResult<ApplicationUser>> PostUser(ApplicationUser user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        // DELETE: api/Users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<ApplicationUser>> DeleteUser(string id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return user;
        }

        private bool UserExists(string id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}
