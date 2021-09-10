using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using Messenger.Models;
using Microsoft.AspNetCore.Identity;

namespace Messenger.Data
{
    public static class DataInitializer
    {
        public static void Init(ApplicationDbContext dbContext)
        {
            var skip = true;

            if (skip)
            {
                return;
            }


            #region Creating Users
            var user1 = new ApplicationUser()
            {
                ApplicationUsername = "UsErNaMe",
                FirstName = "Alice",
                LastName = "Alibabaeva",
                Email = "alibaba@mail.com",
                EmailConfirmed = true
            };
            var user2 = new ApplicationUser()
            {
                ApplicationUsername = "Kukuruza",
                FirstName = "Kukuruza",
                LastName = "Kukuruza",
                Email = "Kukuruza@mail.com",
                EmailConfirmed = true
            };
            var user3 = new ApplicationUser()
            {
                ApplicationUsername = "LOLKA",
                FirstName = "LOLKA",
                LastName = "LOLKA",
                Email = "LOLKA@mail.com",
                EmailConfirmed = true
            };
            var users = new List<ApplicationUser>() {user1, user2, user3};
            
            #endregion

            try
            {
                dbContext.ApplicationUsers.AddRange(users);
                dbContext.SaveChanges();
            }
            catch
            {
                throw new Exception("Something went wrong");
            }

            if (skip)
            {
                #region Creating Servers

                var server1 = new Server()
                {
                    Name = "Alice Server"
                };
                var server2 = new Server()
                {
                    Name = "Kukuruza Server"
                };
                var server3 = new Server()
                {
                    Name = "LOLKA Server"
                };
                var servers = new List<Server>
                {
                    server1, 
                    server2, 
                    server3
                };

                #endregion

                #region Creating chats

                var chat11 = new PublicChat()
                {
                    Name = "general",
                    Server = server1
                };
                var chat12 = new PublicChat()
                {
                    Name = "For girls",
                    Server = server1
                };
                var chat21 = new PublicChat()
                {
                    Name = "general",
                    Server = server2
                };
                var chat22 = new PublicChat()
                {
                    Name = "For kukuruznicks",
                    Server = server2
                };
                var chat31 = new PublicChat()
                {
                    Name = "general",
                    Server = server2
                };
                var chat32 = new PublicChat()
                {
                    Name = "LOL",
                    Server = server2
                };
                var chats = new List<PublicChat>
                {
                    chat11, 
                    chat12, 
                    chat21, 
                    chat22, 
                    chat31, 
                    chat32
                };

                #endregion

                #region Creating messages

                var message111 = new PublicMessage()
                {
                    UserId = user1.Id,
                    User = user1,
                    Chat = chat11,
                    Text = "hello world"
                };
                var message112 = new PublicMessage()
                {
                    UserId = user2.Id,
                    User = user2,
                    Chat = chat11,
                    Text = "hello world too"
                };
                var message121 = new PublicMessage()
                {
                    UserId = user1.Id,
                    User = user1,
                    Chat = chat12,
                    Text = "hello world"
                };
                var message122 = new PublicMessage()
                {
                    UserId = user2.Id,
                    User = user2,
                    Chat = chat12,
                    Text = "hello world too"
                };
                var message211 = new PublicMessage()
                {
                    UserId = user2.Id,
                    User = user2,
                    Chat = chat21,
                    Text = "hello world"
                };
                var message212 = new PublicMessage()
                {
                    UserId = user3.Id,
                    User = user3,
                    Chat = chat21,
                    Text = "hello world too"
                };
                var message221 = new PublicMessage()
                {
                    UserId = user2.Id,
                    User = user2,
                    Chat = chat22,
                    Text = "hello world"
                };
                var message222 = new PublicMessage()
                {
                    UserId = user3.Id,
                    User = user3,
                    Chat = chat22,
                    Text = "hello world too"
                };
                var message311 = new PublicMessage()
                {
                    UserId = user1.Id,
                    User = user1,
                    Chat = chat31,
                    Text = "hello world"
                };
                var message312 = new PublicMessage()
                {
                    UserId = user3.Id,
                    User = user3,
                    Chat = chat31,
                    Text = "hello world too"
                };
                var message321 = new PublicMessage()
                {
                    UserId = user1.Id,
                    User = user1,
                    Chat = chat32,
                    Text = "hello world"
                };
                var message322 = new PublicMessage()
                {
                    UserId = user3.Id,
                    User = user3,
                    Chat = chat32,
                    Text = "hello world too"
                };
                var messages = new List<PublicMessage>
                {
                    message111,
                    message112,
                    message121,
                    message122,
                    message211,
                    message212,
                    message221,
                    message222,
                    message311,
                    message312,
                    message321,
                    message322,
                };

                #endregion

                #region Adding users to server

                server1.Users.Add(user1);
                server1.Users.Add(user2);

                server2.Users.Add(user2);
                server2.Users.Add(user3);

                server3.Users.Add(user1);
                server3.Users.Add(user3);

                #endregion

                #region Adding chats to server

                server1.Chats.Add(chat11);
                server1.Chats.Add(chat12);

                server2.Chats.Add(chat21);
                server2.Chats.Add(chat22);

                server3.Chats.Add(chat31);
                server3.Chats.Add(chat32);
                
                #endregion

                #region Adding messages to chats

                chat11.Messages.Add(message111);
                chat11.Messages.Add(message112);

                chat12.Messages.Add(message121);
                chat12.Messages.Add(message122);

                chat21.Messages.Add(message211);
                chat21.Messages.Add(message212);

                chat22.Messages.Add(message221);
                chat22.Messages.Add(message222);

                chat31.Messages.Add(message311);
                chat31.Messages.Add(message312);

                chat32.Messages.Add(message321);
                chat32.Messages.Add(message322);
                
                #endregion

                try
                {
                    dbContext.Servers.AddRange(servers);
                    dbContext.PublicChats.AddRange(chats);
                    dbContext.PublicMessages.AddRange(messages);

                    dbContext.SaveChanges();
                }
                catch
                {
                    throw new Exception("Something went wrong");
                }
            }

        }
    }
}
