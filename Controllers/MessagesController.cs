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
    [Route("api/PublicMessages")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MessagesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/PublicMessages/{ChatId}
        [HttpGet("{ChatId}")]
        public async Task<ActionResult<IEnumerable<PublicMessage>>> GetMessagesByChat(string ChatId)
        {
            var messages = await _context.PublicMessages
                .Include(m => m.Chat)
                .Where(c => c.ChatId == ChatId)
                .OrderBy(m => m.CreatingTime)
                .ToListAsync();

            if(messages == null)
            {
                return NotFound();
            }

            return messages;
        }

        // POST api/PublicMessages
        [HttpPost]
        public async Task<ActionResult<PublicMessage>> Post(PublicMessage message)
        {
            _context.PublicMessages.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMessage",new { MessageId = message.MessageId }, message);
        }
    }
}
