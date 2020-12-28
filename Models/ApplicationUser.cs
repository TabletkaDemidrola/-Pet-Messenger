using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public ICollection<PublicMessage> Messages { get; set; }
        public ICollection<UserServer> Servers { get; set; }
        public ICollection<PrivateMessage> PrivateMessages { get; set; }
        public ICollection<Friend> Friends { get; set; }
        public ICollection<PrivateChat> PrivateChats { get; set; }

        public ApplicationUser()
        {
            PrivateChats = new List<PrivateChat>();
            Friends = new List<Friend>();
            PrivateMessages = new List<PrivateMessage>();
            Servers = new List<UserServer>();
            Messages = new List<PublicMessage>();
        }
    }
}
