using Messenger.Data;
using Messenger.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Messenger.Controllers
{
    [Route("api/PublicChats")]
    [ApiController]
    public class ChatsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ChatsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET api/Chats/{ServerId}
        [HttpGet("{ServerId}")]
        public async Task<ActionResult<IEnumerable<PublicChat>>> GetChatsByServer(string ServerId)
        {
            var chats = await _context.PublicChats
                .Include(c => c.Server)
                .Where(s => s.ServerId == ServerId)
                .OrderBy(c => c.CreatingTime)
                .ToListAsync();

            if(chats == null)
            {
                return NotFound();
            }

            return chats;
        }

        // POST api/Chats
        [HttpPost]
        public async Task<ActionResult<PublicChat>> Post(PublicChat chat)
        {
            _context.PublicChats.Add(chat);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetChat", new { ChatId = chat.ChatId }, chat);
        }

        // PUT api/Chats/ChatId
        [HttpPut("{ChatId}")]
        public async Task<IActionResult> Put(string ChatId, [FromBody] PublicChat chat)
        {
            if (ChatId != chat.ChatId)
            {
                return BadRequest();
            }

            _context.Entry(chat).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(ChatId))
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

        // ПРОВЕРИТЬ ГДЕ ПРАВИЛЬНО ТУТ ИЛИ В ЮЗЕРКОНТРОЛЛЕРЕ
        // DELETE api/Chats/ChatId
        [HttpDelete("{ChatId}")]
        public async Task<IActionResult> Delete(string ChatId)
        {
            var chat = await _context.PublicChats.FindAsync(ChatId);

            if(chat == null)
            {
                return NotFound();
            }

            _context.PublicChats.Remove(chat);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(string ChatId)
        {
            return _context.PublicChats.Any(c => c.ChatId == ChatId);
        }
    }
}
