﻿using Messenger.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Messenger.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<ApplicationUser> Accounts { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Server> Servers { get; set; }
        public DbSet<PublicChat> PublicChats { get; set; }

        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Friend>().HasKey(u => new { u.UserOneId, u.UserTwoId });

            //One-to-one
            modelBuilder.Entity<User>()
                .HasOne(u => u.ApplicationUser)
                .WithOne(u => u.User)
                .HasForeignKey("ApplicationUser");

            //Many-to-many
            modelBuilder.Entity<User>()
                .HasMany(s => s.Servers)
                .WithMany(u => u.Users);

            //One-to-many
            modelBuilder.Entity<Friend>()
                .HasOne(u => u.UserOne)
                .WithMany(u => u.Friends)
                .HasForeignKey(u => u.UserOneId)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<Friend>()
                .HasOne(u => u.UserTwo)
                .WithMany()
                .HasForeignKey(u => u.UserTwoId)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<PrivateChat>()
                .HasOne(u => u.UserOne)
                .WithMany(u => u.PrivateChats)
                .HasForeignKey(u => u.UserOneId)
                .OnDelete(DeleteBehavior.SetNull);

            modelBuilder.Entity<PrivateChat>()
                .HasOne(u => u.UserTwo)
                .WithMany()
                .HasForeignKey(u => u.UserTwoId)
                .OnDelete(DeleteBehavior.SetNull);
        }
    }
}
