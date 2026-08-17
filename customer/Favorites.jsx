import React from 'react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { ServiceCard } from '../../components/service/ServiceCard';
import { EmptyState } from '../../components/common/EmptyState';
import { useApp } from '../../context/AppContext';

export const Favorites = () => {
  const { favorites, services } = useApp();
  const favServices = services.filter(s => favorites.includes(s.id));

  return (
    <DashboardLayout title="Saved Favorites">
      <div className="space-y-6">
        {favServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favServices.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        ) : (
          <EmptyState 
            title="No favorite services saved yet" 
            description="Explore our local services and click the heart icon to save providers for easy access."
          />
        )}
      </div>
    </DashboardLayout>
  );
};
