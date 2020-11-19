using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class User
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        [Required]
        public string ApplicationUserId { get; set; }
        public ApplicationUser ApplicationUser { get; set; }

        public ICollection<PublicMessage> Messages { get; set; }
        public ICollection<Server> Servers { get; set; }
        public ICollection<PrivateMessage> PrivateMessages { get; set; }
        public ICollection<Friend> Friends { get; set; }
        public ICollection<PrivateChat> PrivateChats { get; set; }

        public User()
        {
            PrivateChats = new List<PrivateChat>();
            Friends = new List<Friend>();
            PrivateMessages = new List<PrivateMessage>();
            Servers = new List<Server>();
            Messages = new List<PublicMessage>();
        }
    }
}
