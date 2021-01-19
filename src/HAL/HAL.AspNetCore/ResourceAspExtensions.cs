﻿using HAL.AspNetCore.Abstractions;
using HAL.Common.Abstractions;

namespace HAL.Common
{
    /// <summary>
    /// Contains extension methods for <see cref="IResource"/> which also utilize services from ASP.Net Core.
    /// </summary>
    public static class ResourceAspExtensions
    {
        /// <summary>
        /// Adds the "self" link to the resource.
        /// </summary>
        /// <typeparam name="TResource">The type of the resource.</typeparam>
        /// <param name="resource">The resource.</param>
        /// <param name="linkFactory">The link factory.</param>
        /// <returns></returns>
        public static TResource AddSelfLink<TResource>(this TResource resource, ILinkFactory linkFactory)
            where TResource : IResource
        {
            return linkFactory.AddSelfLinkTo(resource);
        }
    }
}