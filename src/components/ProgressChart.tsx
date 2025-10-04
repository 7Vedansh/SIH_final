import React from 'react';

interface ProgressChartProps {
  selectedState: string;
}

const stateData = {
  all: [
    { state: 'Madhya Pradesh', approved: 71, pending: 29, total: 125640 },
    { state: 'Odisha', approved: 76, pending: 24, total: 95420 },
    { state: 'Telangana', approved: 68, pending: 32, total: 87350 },
    { state: 'Tripura', approved: 82, pending: 18, total: 148370 },
  ],
  mp: [
    { district: 'Balaghat', approved: 85, pending: 15, total: 12450 },
    { district: 'Dindori', approved: 78, pending: 22, total: 8930 },
    { district: 'Mandla', approved: 72, pending: 28, total: 11200 },
    { district: 'Seoni', approved: 69, pending: 31, total: 9860 },
  ],
  odisha: [
    { district: 'Mayurbhanj', approved: 81, pending: 19, total: 18760 },
    { district: 'Keonjhar', approved: 74, pending: 26, total: 15420 },
    { district: 'Sundargarh', approved: 77, pending: 23, total: 16890 },
    { district: 'Kandhamal', approved: 70, pending: 30, total: 12340 },
  ]
};

export function ProgressChart({ selectedState }: ProgressChartProps) {
  const data = stateData[selectedState as keyof typeof stateData] || stateData.all;
  
  return (
    <div className="space-y-4">
      {data.map((item, index) => {
        const name = 'state' in item ? item.state : item.district;
        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{name}</span>
              <span className="text-sm text-gray-500">{item.total.toLocaleString()} claims</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full relative"
                style={{ width: `${item.approved}%` }}
              >
                <div 
                  className="bg-orange-400 h-2 rounded-r-full absolute right-0"
                  style={{ width: `${(item.pending / item.approved) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Approved: {item.approved}%</span>
              <span>Pending: {item.pending}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}