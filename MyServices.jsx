import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
import { DashboardLayout } from '../../components/layout/DashboardLayout';
import { Button } from '../../components/common/Button';
import { ServiceCard } from '../../components/service/ServiceCard';
import { useApp } from '../../context/AppContext';

export const MyServices = () => {
  const { services } = useApp();

  return (
    <DashboardLayout title="My Service Listings">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <p className="text-xs text-[#625557] font-semibold">
            Manage your published services visible to local customers.
          </p>
          <Link to="/provider/services/add">
            <Button variant="primary" size="sm" icon={PlusCircle}>
              Add New Service
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <ServiceCard key={srv.id} service={srv} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};
