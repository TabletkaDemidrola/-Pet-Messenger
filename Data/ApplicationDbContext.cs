using Messenger.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Messenger.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public DbSet<ApplicationUser> ApplicationUsers { get; set; }
        public DbSet<Server> Servers { get; set; }
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Friend>().HasKey(u => new { u.UserOneId, u.UserTwoId });
            modelBuilder.Entity<UserServer>().HasKey(us => new { us.ServerId, us.UserId });

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
