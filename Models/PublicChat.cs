using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class PublicChat
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime CreatingTime { get; set; }

        public int ServerId { get; set; }
        [ForeignKey("ServerId")]
        public Server Server { get; set; }

        public ICollection<PublicMessage> Messages { get; set; }

        public PublicChat()
        {
            Messages = new List<PublicMessage>();
            CreatingTime = DateTime.Now;
        }
    }
}
