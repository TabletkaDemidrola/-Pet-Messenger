using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class PublicMessage
    {
        [Key]
        public string MessageId { get; set; }
        [Required]
        public string Text { get; set; }
        public DateTime CreatingTime { get; set; }

        public string ChatId { get; set; }
        [ForeignKey("ChatId")]
        public PublicChat Chat { get; set; }

        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        public PublicMessage()
        {
            CreatingTime = DateTime.Now;
        }
    }
}
