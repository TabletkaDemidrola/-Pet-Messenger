using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Models
{
    public class Friend
    {
        public FriendRequestFlag FriendRequestFlag { get; set; }

        public string UserOneId { get; set; }
        public User UserOne { get; set; }

        public string UserTwoId { get; set; }
        public User UserTwo { get; set; }
    }
    public enum FriendRequestFlag
    {
        None,
        Approved,
        Rejected,
        Blocked
    };
}
