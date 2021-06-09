using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class PrivateMessage
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Text { get; set; }
        public DateTime CreatingTime { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public ApplicationUser User { get; set; }
        public int ChatId { get; set; }
        [ForeignKey("ChatId")]
        public PrivateChat Chat { get; set; }

        public PrivateMessage()
        {
            CreatingTime = DateTime.Now;
        }
    }
}
