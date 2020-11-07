using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class Server
    {

        [Key]
        public string ServerId { get; set; }
        [Required]
        public string Name { get; set; }
        public DateTime CreatingTime = DateTime.Now;

        public ICollection<PublicChat> Chats { get; set; }
        public ICollection<UserServer> Users { get; set; }

        public Server()
        {
            Users = new List<UserServer>();
            Chats = new List<PublicChat>();
        }
    }
}
