import React from 'react';
import { CheckCircle, AlertTriangle, FileText, MapPin } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'approval',
    message: '1,234 IFR claims approved in Balaghat district',
    time: '2 hours ago',
    icon: CheckCircle,
    color: 'text-green-600'
  },
  {
    id: 2,
    type: 'alert',
    message: 'Verification pending for 89 CFR applications in Dindori',
    time: '4 hours ago',
    icon: AlertTriangle,
    color: 'text-orange-600'
  },
  {
    id: 3,
    type: 'document',
    message: 'Legacy data digitization completed for Mandla block',
    time: '6 hours ago',
    icon: FileText,
    color: 'text-blue-600'
  },
  {
    id: 4,
    type: 'mapping',
    message: 'Asset mapping updated for 45 villages in Mayurbhanj',
    time: '8 hours ago',
    icon: MapPin,
    color: 'text-purple-600'
  }
];

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => {
        const Icon = activity.icon;
        return (
          <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-4 h-4 ${activity.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">{activity.message}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        );
      })}
      <button className="w-full text-center py-2 text-sm text-green-600 hover:text-green-700 font-medium">
        View all activities →
      </button>
    </div>
  );
}