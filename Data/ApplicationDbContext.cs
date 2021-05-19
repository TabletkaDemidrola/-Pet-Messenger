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

            //Many-to-many
            modelBuilder.Entity<ApplicationUser>()
                .HasMany(s => s.Servers)
                .WithMany(u => u.Users);

            //One-to-many
            modelBuilder.Entity<Friend>()
                .HasOne(u => u.UserOne)
                .WithMany(u => u.Friends)
                .HasForeignKey(u => u.UserOneId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<Friend>()
                .HasOne(u => u.UserTwo)
                .WithMany()
                .HasForeignKey(u => u.UserTwoId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<PrivateChat>()
                .HasOne(u => u.UserOne)
                .WithMany(u => u.PrivateChats)
                .HasForeignKey(u => u.UserOneId)
                .OnDelete(DeleteBehavior.NoAction);

            modelBuilder.Entity<PrivateChat>()
                .HasOne(u => u.UserTwo)
                .WithMany()
                .HasForeignKey(u => u.UserTwoId)
                .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
