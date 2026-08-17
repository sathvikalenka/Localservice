import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { RatingStars } from '../common/RatingStars';
import { Button } from '../common/Button';
import { useApp } from '../../context/AppContext';

export const ServiceCard = ({ service, onBook }) => {
  const { favorites, toggleFavorite } = useApp();
  const isFav = favorites.includes(service.id);

  return (
    <div className="group card-burgundy-elevated flex flex-col justify-between overflow-hidden relative">
      <div>
        {/* Service Image & Badges */}
        <div className="relative aspect-[4/3] overflow-hidden bg-[#5C0713]">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5C0713]/80 via-transparent to-transparent opacity-80" />

          {/* Favorite Heart Button */}
          <button
            onClick={(e) => { e.preventDefault(); toggleFavorite(service.id); }}
            className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all shadow-md ${
              isFav ? 'bg-[#E7A51A] text-white' : 'bg-black/40 text-white hover:bg-black/60'
            }`}
            aria-label="Toggle favorite"
          >
            <Heart className={`w-4 h-4 ${isFav ? 'fill-white' : ''}`} />
          </button>

          {/* Availability Badge */}
          {service.availableToday && (
            <span className="absolute bottom-3 left-3 bg-[#2F9B68] text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/20 shadow-xs">
              Available Today
            </span>
          )}
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Provider Mini Info */}
          <div className="flex items-center gap-2 mb-2.5">
            <img 
              src={service.providerAvatar} 
              alt={service.providerName} 
              className="w-7 h-7 rounded-full object-cover border border-white/30"
            />
            <span className="text-xs font-semibold text-[#FFF4F2]/90 truncate">{service.providerName}</span>
            {service.verified && (
              <ShieldCheck className="w-3.5 h-3.5 text-[#E7A51A] shrink-0" title="Verified Provider" />
            )}
          </div>

          {/* Title */}
          <h3 className="font-bold text-base text-white group-hover:text-[#E7A51A] transition-colors line-clamp-2 mb-2 leading-snug">
            <Link to={`/services/${service.id}`}>
              {service.title}
            </Link>
          </h3>

          {/* Rating */}
          <div className="mb-3">
            <RatingStars rating={service.rating} reviewsCount={service.reviewsCount} size="xs" darkTheme={true} />
          </div>

          {/* Details Pill Info */}
          <div className="flex items-center gap-3 text-xs text-[#FFF4F2]/80 border-t border-white/10 pt-3">
            <span className="flex items-center gap-1 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#E7A51A]" />
              {service.distance || service.location}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#E7A51A]" />
              {service.duration}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer Price & CTA */}
      <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-white/10">
        <div>
          <span className="text-[10px] text-[#FFF4F2]/70 uppercase font-bold tracking-wider block">Starting From</span>
          <span className="text-lg font-extrabold text-[#E7A51A]">₹{service.price}</span>
        </div>
        <Link to={`/services/${service.id}`}>
          <Button variant="secondary" size="sm" icon={ArrowRight}>
            View Details
          </Button>
        </Link>
      </div>

    </div>
  );
};
