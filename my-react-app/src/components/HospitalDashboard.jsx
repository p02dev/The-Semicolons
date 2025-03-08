// import React, { useState } from 'react';
// import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
// import { Progress } from './ui/progress';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Bell, AlertTriangle, Clock, MapPin, Star, Users, Activity, Calendar, Check } from 'lucide-react';
// import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// // Sample data for dashboards
// const waitTimeData = [
//   { department: 'Emergency', currentWait: 35, status: 'High' },
//   { department: 'Radiology', currentWait: 15, status: 'Normal' },
//   { department: 'Laboratory', currentWait: 10, status: 'Low' },
//   { department: 'General Practice', currentWait: 25, status: 'Normal' },
//   { department: 'Pediatrics', currentWait: 20, status: 'Normal' },
// ];

// const nearbyHospitals = [
//   { name: 'Central Hospital', distance: '2.3 miles', waitTime: 25, rating: 4.5 },
//   { name: 'Westside Medical', distance: '3.8 miles', waitTime: 15, rating: 4.2 },
//   { name: 'Eastview Healthcare', distance: '5.1 miles', waitTime: 40, rating: 4.7 },
//   { name: 'North County Hospital', distance: '7.4 miles', waitTime: 30, rating: 4.1 },
// ];

// const waitingPatients = [
//   { id: 'P1042', name: 'John Smith', waitTime: 34, department: 'Emergency', checkedIn: '10:15 AM', priority: 'Medium' },
//   { id: 'P1043', name: 'Maria Garcia', waitTime: 25, department: 'Radiology', checkedIn: '10:24 AM', priority: 'Low' },
//   { id: 'P1044', name: 'Robert Chen', waitTime: 42, department: 'Emergency', checkedIn: '10:05 AM', priority: 'High' },
//   { id: 'P1045', name: 'Sarah Johnson', waitTime: 18, department: 'Laboratory', checkedIn: '10:32 AM', priority: 'Low' },
//   { id: 'P1046', name: 'James Williams', waitTime: 29, department: 'General Practice', checkedIn: '10:22 AM', priority: 'Medium' },
// ];

// const hourlyData = [
//   { hour: '8 AM', patients: 12 },
//   { hour: '9 AM', patients: 19 },
//   { hour: '10 AM', patients: 25 },
//   { hour: '11 AM', patients: 32 },
//   { hour: '12 PM', patients: 30 },
//   { hour: '1 PM', patients: 26 },
//   { hour: '2 PM', patients: 20 },
//   { hour: '3 PM', patients: 18 },
//   { hour: '4 PM', patients: 15 },
//   { hour: '5 PM', patients: 10 },
// ];

// const departmentLoad = [
//   { name: 'Emergency', patients: 15 },
//   { name: 'Radiology', patients: 8 },
//   { name: 'Laboratory', patients: 5 },
//   { name: 'General Practice', patients: 12 },
//   { name: 'Pediatrics', patients: 9 },
// ];

// const doctorAvailability = [
//   { name: 'Dr. Anderson', department: 'Emergency', status: 'Available', patients: 3 },
//   { name: 'Dr. Murphy', department: 'Emergency', status: 'With Patient', patients: 1 },
//   { name: 'Dr. Patel', department: 'Radiology', status: 'Available', patients: 0 },
//   { name: 'Dr. Johnson', department: 'General Practice', status: 'Break', patients: 0 },
//   { name: 'Dr. Kim', department: 'Pediatrics', status: 'With Patient', patients: 2 },
//   { name: 'Dr. Garcia', department: 'Laboratory', status: 'Available', patients: 1 },
// ];

// const HospitalDashboard = () => {
//   const [activeTab, setActiveTab] = useState('patients');
//   const [checkedIn, setCheckedIn] = useState(false);
//   const [selectedDepartment, setSelectedDepartment] = useState('');

//   const handleCheckIn = () => {
//     setCheckedIn(true);
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case 'High':
//         return 'text-red-600';
//       case 'Medium':
//         return 'text-amber-500';
//       case 'Low':
//         return 'text-green-600';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'Available':
//         return 'text-green-600';
//       case 'With Patient':
//         return 'text-amber-500';
//       case 'Break':
//         return 'text-blue-500';
//       default:
//         return 'text-gray-600';
//     }
//   };

//   const getWaitTimeColor = (time) => {
//     if (time < 15) return 'bg-green-500';
//     if (time < 30) return 'bg-amber-500';
//     return 'bg-red-500';
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto p-4">
//       <Tabs defaultValue="patients" value={activeTab} onValueChange={setActiveTab}>
//         <TabsList className="grid grid-cols-2 mb-6">
//           <TabsTrigger value="patients">Patient Dashboard</TabsTrigger>
//           <TabsTrigger value="staff">Hospital Staff Dashboard</TabsTrigger>
//         </TabsList>
        
//         {/* Patient Dashboard */}
//         <TabsContent value="patients" className="space-y-6">
//           {!checkedIn ? (
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-2xl">Online Check-In</CardTitle>
//                 <CardDescription>Check in to your appointment or the ER to save time</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Department</label>
//                     <select 
//                       className="w-full p-2 border rounded-md"
//                       value={selectedDepartment}
//                       onChange={(e) => setSelectedDepartment(e.target.value)}
//                     >
//                       <option value="">Select Department</option>
//                       {waitTimeData.map((dept) => (
//                         <option key={dept.department} value={dept.department}>{dept.department}</option>
//                       ))}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Full Name</label>
//                     <Input placeholder="Enter your full name" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Date of Birth</label>
//                     <Input type="date" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Phone Number</label>
//                     <Input placeholder="(555) 555-5555" />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Reason for Visit</label>
//                     <textarea className="w-full p-2 border rounded-md" rows="3"></textarea>
//                   </div>
//                   <Button 
//                     className="w-full"
//                     onClick={handleCheckIn}
//                     disabled={!selectedDepartment}
//                   >
//                     Check In Now
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           ) : (
//             <Card className="bg-green-50">
//               <CardHeader>
//                 <CardTitle className="text-2xl flex items-center gap-2">
//                   <Check className="text-green-600" size={24} />
//                   Check-In Confirmed
//                 </CardTitle>
//                 <CardDescription>You're in line for the {selectedDepartment} department</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="flex justify-between items-center">
//                     <span className="font-medium">Your position in line:</span>
//                     <span className="text-xl font-bold">3</span>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <span>Estimated wait time:</span>
//                       <span className="font-bold">
//                         {waitTimeData.find(dept => dept.department === selectedDepartment)?.currentWait || 20} minutes
//                       </span>
//                     </div>
//                     <Progress 
//                       value={60} 
//                       className="h-2" 
//                     />
//                   </div>
//                   <div className="p-3 bg-blue-50 rounded-md text-blue-800 text-sm">
//                     We'll send a notification when you're next in line. You can wait in your car or nearby.
//                   </div>
//                   <Button variant="outline" className="w-full" onClick={() => setCheckedIn(false)}>
//                     Cancel Check-In
//                   </Button>
//                 </div>
//               </CardContent>
//             </Card>
//           )}
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Clock size={20} />
//                   Current Wait Times
//                 </CardTitle>
//                 <CardDescription>Live estimates for each department</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {waitTimeData.map((dept) => (
//                     <div key={dept.department} className="space-y-1">
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium">{dept.department}</span>
//                         <span className={`font-bold ${getPriorityColor(dept.status)}`}>
//                           {dept.currentWait} min
//                         </span>
//                       </div>
//                       <Progress 
//                         value={100 - (dept.currentWait / 60 * 100)} 
//                         className={`h-2 ${getWaitTimeColor(dept.currentWait)}`}
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Users size={20} />
//                   Waiting Patients
//                 </CardTitle>
//                 <CardDescription>List of patients waiting for service</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {waitingPatients.map((patient) => (
//                     <div key={patient.id} className="flex justify-between items-center">
//                       <span>{patient.name}</span>
//                       <span className={`text-sm font-medium ${getPriorityColor(patient.priority)}`}>
//                         {patient.waitTime} min
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>

//         {/* Hospital Staff Dashboard */}
//         <TabsContent value="staff" className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Activity size={20} />
//                   Hospital Activity
//                 </CardTitle>
//                 <CardDescription>Hourly hospital activity tracking</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={hourlyData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="hour" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="patients" stroke="#8884d8" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <MapPin size={20} />
//                   Hospital Locations
//                 </CardTitle>
//                 <CardDescription>Nearby hospitals with wait time estimates</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {nearbyHospitals.map((hospital) => (
//                   <div key={hospital.name} className="flex justify-between items-center">
//                     <div>
//                       <span className="font-medium">{hospital.name}</span>
//                       <div className="text-sm">{hospital.distance}</div>
//                     </div>
//                     <span className={`font-bold ${getPriorityColor(hospital.waitTime > 30 ? 'High' : hospital.waitTime > 15 ? 'Medium' : 'Low')}`}>
//                       {hospital.waitTime} min
//                     </span>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Star size={20} />
//                   Department Load
//                 </CardTitle>
//                 <CardDescription>Number of patients currently in each department</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={departmentLoad}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="patients" fill="#82ca9d" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <Calendar size={20} />
//                   Doctor Availability
//                 </CardTitle>
//                 <CardDescription>Current availability and status of doctors</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 {doctorAvailability.map((doctor) => (
//                   <div key={doctor.name} className="flex justify-between items-center">
//                     <div>
//                       <span className="font-medium">{doctor.name}</span>
//                       <div className="text-sm">{doctor.department}</div>
//                     </div>
//                     <span className={`text-sm ${getStatusColor(doctor.status)}`}>{doctor.status}</span>
//                   </div>
//                 ))}
//               </CardContent>
//             </Card>
//           </div>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default HospitalDashboard;



import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/Tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Progress } from './ui/Progress';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Bell, AlertTriangle, Clock, MapPin, Star, Users, Activity, Calendar, Check } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "App.css";



// Sample data for dashboards
const waitTimeData = [
  { department: 'Emergency', currentWait: 35, status: 'High' },
  { department: 'Radiology', currentWait: 15, status: 'Normal' },
  { department: 'Laboratory', currentWait: 10, status: 'Low' },
  { department: 'General Practice', currentWait: 25, status: 'Normal' },
  { department: 'Pediatrics', currentWait: 20, status: 'Normal' },
];

const nearbyHospitals = [
  { name: 'Central Hospital', distance: '2.3 miles', waitTime: 25, rating: 4.5 },
  { name: 'Westside Medical', distance: '3.8 miles', waitTime: 15, rating: 4.2 },
  { name: 'Eastview Healthcare', distance: '5.1 miles', waitTime: 40, rating: 4.7 },
  { name: 'North County Hospital', distance: '7.4 miles', waitTime: 30, rating: 4.1 },
];

const waitingPatients = [
  { id: 'P1042', name: 'John Smith', waitTime: 34, department: 'Emergency', checkedIn: '10:15 AM', priority: 'Medium' },
  { id: 'P1043', name: 'Maria Garcia', waitTime: 25, department: 'Radiology', checkedIn: '10:24 AM', priority: 'Low' },
  { id: 'P1044', name: 'Robert Chen', waitTime: 42, department: 'Emergency', checkedIn: '10:05 AM', priority: 'High' },
  { id: 'P1045', name: 'Sarah Johnson', waitTime: 18, department: 'Laboratory', checkedIn: '10:32 AM', priority: 'Low' },
  { id: 'P1046', name: 'James Williams', waitTime: 29, department: 'General Practice', checkedIn: '10:22 AM', priority: 'Medium' },
];

const hourlyData = [
  { hour: '8 AM', patients: 12 },
  { hour: '9 AM', patients: 19 },
  { hour: '10 AM', patients: 25 },
  { hour: '11 AM', patients: 32 },
  { hour: '12 PM', patients: 30 },
  { hour: '1 PM', patients: 26 },
  { hour: '2 PM', patients: 20 },
  { hour: '3 PM', patients: 18 },
  { hour: '4 PM', patients: 15 },
  { hour: '5 PM', patients: 10 },
];

const departmentLoad = [
  { name: 'Emergency', patients: 15 },
  { name: 'Radiology', patients: 8 },
  { name: 'Laboratory', patients: 5 },
  { name: 'General Practice', patients: 12 },
  { name: 'Pediatrics', patients: 9 },
];

const doctorAvailability = [
  { name: 'Dr. Anderson', department: 'Emergency', status: 'Available', patients: 3 },
  { name: 'Dr. Murphy', department: 'Emergency', status: 'With Patient', patients: 1 },
  { name: 'Dr. Patel', department: 'Radiology', status: 'Available', patients: 0 },
  { name: 'Dr. Johnson', department: 'General Practice', status: 'Break', patients: 0 },
  { name: 'Dr. Kim', department: 'Pediatrics', status: 'With Patient', patients: 2 },
  { name: 'Dr. Garcia', department: 'Laboratory', status: 'Available', patients: 1 },
];

const HospitalDashboard = () => {
  const [activeTab, setActiveTab] = useState('patients');
  const [checkedIn, setCheckedIn] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  const handleCheckIn = () => {
    setCheckedIn(true);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'High':
        return 'text-high';
      case 'Medium':
        return 'text-medium';
      case 'Low':
        return 'text-low';
      default:
        return 'text-normal';
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Available':
        return 'text-available';
      case 'With Patient':
        return 'text-busy';
      case 'Break':
        return 'text-break';
      default:
        return 'text-normal';
    }
  };
  

  const getWaitTimeClass = (time) => {
    if (time < 15) return 'progress-low';
    if (time < 30) return 'progress-medium';
    return 'progress-high';
  };

  return (
    <div className="dashboard-container">
      <Tabs defaultValue="patients" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="tabs-list-grid">
          <TabsTrigger value="patients">Patient Dashboard</TabsTrigger>
          <TabsTrigger value="staff">Hospital Staff Dashboard</TabsTrigger>
        </TabsList>
        
        {/* Patient Dashboard */}
        <TabsContent value="patients" className="tabs-content">
          {!checkedIn ? (
            <Card>
              <CardHeader>
                <CardTitle className="card-title-large">Online Check-In</CardTitle>
                <CardDescription>Check in to your appointment or the ER to save time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="form-container">
                  <div className="form-group">
                    <label className="form-label">Department</label>
                    <select 
                      className="form-select"
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                      <option value="">Select Department</option>
                      {waitTimeData.map((dept) => (
                        <option key={dept.department} value={dept.department}>{dept.department}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <Input placeholder="Enter your full name" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Date of Birth</label>
                    <Input type="date" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <Input placeholder="(555) 555-5555" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Reason for Visit</label>
                    <textarea className="form-textarea" rows="3"></textarea>
                  </div>
                  <Button 
                    className="button-full"
                    onClick={handleCheckIn}
                    disabled={!selectedDepartment}
                  >
                    Check In Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="card-success">
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <Check className="icon-success" size={24} />
                  Check-In Confirmed
                </CardTitle>
                <CardDescription>You're in line for the {selectedDepartment} department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="confirmation-container">
                  <div className="flex-between">
                    <span className="text-medium-weight">Your position in line:</span>
                    <span className="text-large text-bold">3</span>
                  </div>
                  <div className="progress-container">
                    <div className="flex-between">
                      <span>Estimated wait time:</span>
                      <span className="text-bold">
                        {waitTimeData.find(dept => dept.department === selectedDepartment)?.currentWait || 20} minutes
                      </span>
                    </div>
                    <Progress 
                      value={60} 
                      className="progress-bar-small" 
                    />
                  </div>
                  <div className="notification-box">
                    We'll send a notification when you're next in line. You can wait in your car or nearby.
                  </div>
                  <Button variant="outline" className="button-full" onClick={() => setCheckedIn(false)}>
                    Cancel Check-In
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="dashboard-grid">
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <Clock size={20} />
                  Current Wait Times
                </CardTitle>
                <CardDescription>Live estimates for each department</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="wait-times-container">
                  {waitTimeData.map((dept) => (
                    <div key={dept.department} className="wait-time-item">
                      <div className="flex-between">
                        <span className="text-medium-weight">{dept.department}</span>
                        <span className={`text-bold ${getPriorityClass(dept.status)}`}>
                          {dept.currentWait} min
                        </span>
                      </div>
                      <Progress 
                        value={100 - (dept.currentWait / 60 * 100)} 
                        className={`progress-bar-small ${getWaitTimeClass(dept.currentWait)}`} 
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <MapPin size={20} />
                  Nearby Hospitals
                </CardTitle>
                <CardDescription>Alternatives with current wait times</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="nearby-hospitals-container">
                  {nearbyHospitals.map((hospital) => (
                    <div key={hospital.name} className="hospital-item">
                      <div className="flex-between">
                        <span className="text-medium-weight">{hospital.name}</span>
                        <span className="text-small text-muted">{hospital.distance}</span>
                      </div>
                      <div className="flex-between hospital-details">
                        <div className="flex-center">
                          <Clock size={16} className="icon-small icon-muted" />
                          <span className={`${getPriorityClass(hospital.waitTime > 30 ? 'High' : hospital.waitTime > 15 ? 'Medium' : 'Low')}`}>
                            {hospital.waitTime} min wait
                          </span>
                        </div>
                        <div className="flex-center">
                          <Star size={16} className="icon-small icon-star" />
                          <span>{hospital.rating}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Hospital Staff Dashboard */}
        <TabsContent value="staff" className="tabs-content">
          <div className="staff-dashboard-grid">
            <Card className="card-wide">
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <Users size={20} />
                  Patient Queue Management
                </CardTitle>
                <CardDescription>Current waiting patients with timestamps</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="table-container">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Patient ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Checked In</th>
                        <th>Wait Time</th>
                        <th>Priority</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {waitingPatients.map((patient) => (
                        <tr key={patient.id}>
                          <td>{patient.id}</td>
                          <td>{patient.name}</td>
                          <td>{patient.department}</td>
                          <td>{patient.checkedIn}</td>
                          <td>{patient.waitTime} min</td>
                          <td>
                            <span className={`priority-badge priority-${patient.priority.toLowerCase()}`}>
                              {patient.priority}
                            </span>
                          </td>
                          <td>
                            <Button size="sm">Admit</Button>
                           
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <AlertTriangle size={20} />
                  Emergency Cases
                </CardTitle>
                <CardDescription>Priority patients requiring immediate attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="emergency-cases-container">
                  {waitingPatients
                    .filter(patient => patient.priority === 'High')
                    .map((patient) => (
                      <div key={patient.id} className="emergency-case">
                        <div className="flex-between">
                          <span className="text-medium-weight">{patient.name}</span>
                          <span className="text-high text-small">
                            {patient.waitTime} min
                          </span>
                        </div>
                        <div className="text-small text-muted margin-top-small">{patient.department}</div>
                        <div className="flex-between margin-top-medium">
                          <span className="text-extra-small text-muted">ID: {patient.id}</span>
                          <Button size="sm" className="button-urgent">
                            Urgent Admit
                          </Button>
                        </div>
                      </div>
                    ))}
                    
                  {waitingPatients.filter(patient => patient.priority === 'High').length === 0 && (
                    <div className="empty-state">
                      No emergency cases at this time
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="dashboard-grid">
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <Activity size={20} />
                  Predictive Analysis
                </CardTitle>
                <CardDescription>Patient volume by hour</CardDescription>
              </CardHeader>
              <CardContent className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={hourlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="patients" 
                      stroke="#3b82f6" 
                      activeDot={{ r: 8 }} 
                      name="Patient Volume"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="card-title-with-icon">
                  <Users size={20} />
                  Department Load
                </CardTitle>
                <CardDescription>Current patient distribution by department</CardDescription>
              </CardHeader>
              <CardContent className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={departmentLoad}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="patients" fill="#3b82f6" name="Current Patients" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="card-title-with-icon">
                <Calendar size={20} />
                Doctor Availability
              </CardTitle>
              <CardDescription>Current status of doctors in different shifts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="doctors-grid">
                {doctorAvailability.map((doctor) => (
                  <div key={doctor.name} className="doctor-card">
                    <div className="text-medium-weight">{doctor.name}</div>
                    <div className="text-small text-muted margin-top-small">{doctor.department}</div>
                    <div className="flex-between margin-top-medium">
                      <span className={getStatusClass(doctor.status)}>
                        {doctor.status}
                      </span>
                      <span className="text-small">
                        {doctor.patients} patient{doctor.patients !== 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HospitalDashboard;