using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class PrivateChat
    {
        [Key]
        public string ChatId { get; set; }
        public string UserOneId { get; set; }
        [ForeignKey("UserOneId")]
        public User UserOne { get; set; }

        public string UserTwoId { get; set; }
        [ForeignKey("UserTwoId")]
        public User UserTwo { get; set; }

        public ICollection<PrivateMessage> Messages { get; set; }

        public PrivateChat()
        {
            Messages = new List<PrivateMessage>();
        }
    }
}
