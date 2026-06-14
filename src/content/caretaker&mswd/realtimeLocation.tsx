import Callout from '../../assets/components/ui/Callout';

export default function RealtimeLocation() {
  return (
    <div className="max-w-3xl mx-auto pb-16 animate-in fade-in duration-500">
      
      {/* Header Section */}
      <section id="overview" className="space-y-4 pb-8 border-b border-slate-200">
        <div className="text-sm text-slate-500 font-medium mb-2">Caretaker & MSWD / Real-time Location</div>
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Real-time Location Tracking</h1>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
          SEELAI provides highly accurate, real-time location monitoring to ensure the safety of partially sighted users. Both assigned Caretakers and MSWD Admins can track users on a live map, calculate exact distances, and review historical movement data.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Firebase Realtime DB</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">Haversine Formula</span>
          <span className="px-2.5 py-1 text-xs font-medium text-seelai-600 bg-seelai-50 border border-seelai-100 rounded-md">24-Hour History</span>
        </div>
      </section>

      {/* Accuracy & Validation */}
      <section id="validation" className="space-y-4 mt-8">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Data Accuracy & Validation</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          To prevent false alarms and ensure responders are sent to the correct location, the tracking engine runs strict validation checks on all incoming coordinate data before displaying it on the map.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1">Recency Check</h3>
            <p className="text-sm text-slate-600">Locations are only marked as "Live" if the coordinate data was updated within the last <strong>5 minutes</strong>.</p>
          </div>
          <div className="bg-white border border-slate-200 p-5 rounded-xl shadow-sm">
            <h3 className="font-bold text-slate-900 mb-1">Accuracy Threshold</h3>
            <p className="text-sm text-slate-600">The GPS hardware must report an accuracy radius of <strong>50 meters or less</strong> to be considered reliable.</p>
          </div>
        </div>
      </section>

      {/* Distance Calculation */}
      <section id="distance" className="space-y-4 mt-12">
        <h2 className="text-2xl font-bold text-slate-900 scroll-mt-24">Distance Calculation</h2>
        <p className="text-slate-600 leading-relaxed">
          The app automatically calculates the exact distance between the Caretaker/Admin and the Partially Sighted user using the <strong>Haversine Formula</strong>. This accounts for the spherical shape of the Earth to provide highly accurate point-to-point metrics in meters and kilometers.
        </p>

        <Callout type="info" title="Location History">
          If a user loses connection or goes off-grid, MSWD Admins and Caretakers can request a 24-hour historical log. The system queries the database using `lastUpdateMillis` to plot the user's last known trajectory.
        </Callout>
      </section>

    </div>
  );
}