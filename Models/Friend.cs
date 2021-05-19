using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class Friend
    {
        public FriendRequestFlag FriendRequestFlag { get; set; }

        public string UserOneId { get; set; }
        [ForeignKey("UserOneId")]
        public ApplicationUser UserOne { get; set; }

        public string UserTwoId { get; set; }
        [ForeignKey("UserTwoId")]
        public ApplicationUser UserTwo { get; set; }
    }
    public enum FriendRequestFlag
    {
        None,
        Approved,
        Rejected,
        Blocked
    };
}
