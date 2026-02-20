import React, { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Send,
  Settings,
  LogOut,
  UserCircle,
  Clock,
  CheckCircle2,
  XCircle,
  Users,
  Lock,
  Mail,
  ChevronLeft,
  Calendar as CalendarIcon,
  Activity,
  ShieldCheck,
  PlusCircle,
  BarChart3,
  Bell,
  Gift,
  Search,
  ChevronRight,
  Sun,
  Moon,
  CalendarDays
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ activeTab, setActiveTab, onLogout, notificationsCount }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard /> },
    { id: 'schedule', label: 'Team Schedule', icon: <CalendarDays /> },
    { id: 'apply', label: 'Apply Leave', icon: <Send /> },
    { id: 'action', label: 'Manager Actions', icon: <Users /> },
    { id: 'directory', label: 'Directory', icon: <UserCircle /> },
    { id: 'holidays', label: 'Holidays', icon: <Gift /> },
    { id: 'admin', label: 'Admin Panel', icon: <ShieldCheck /> },
    { id: 'settings', label: 'Settings', icon: <Settings /> },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-brand">SmartLeave</div>

      <div className="sidebar-profile">
        <div className="avatar">AS</div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>Alice Smith</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Sr. Designer</div>
        </div>
      </div>

      <nav style={{ flex: 1 }}>
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id || (activeTab === 'emp-history' && item.id === 'directory') ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
            style={{ position: 'relative' }}
          >
            {item.icon}
            <span>{item.label}</span>
            {item.id === 'dashboard' && notificationsCount > 0 && (
              <div className="notification-badge" style={{ position: 'static', marginLeft: 'auto', transform: 'none' }}>{notificationsCount}</div>
            )}
          </div>
        ))}
      </nav>
      <div className="nav-item" style={{ marginTop: 'auto', color: '#ef4440' }} onClick={onLogout}>
        <LogOut />
        <span>Logout</span>
      </div>
    </div>
  );
};

// Reusable animated title component with color theme support
const AnimatedTitle = ({ children, color = 'default' }) => (
  <motion.h1
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={`aesthetic-title ${color}`}
  >
    {children}
  </motion.h1>
);

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onLogin();
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      width: '100%',
      background: 'radial-gradient(circle at top right, var(--bg-secondary), var(--bg-primary))',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '10%', left: '15%', width: '300px', height: '300px', background: 'var(--accent-blue)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }}
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '10%', right: '15%', width: '400px', height: '400px', background: 'var(--accent-purple)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card"
        style={{ width: '90%', maxWidth: '420px', padding: '3rem 2rem', zIndex: 1 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.h1
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            style={{ fontSize: '2.5rem', marginBottom: '12px', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', fontWeight: 800 }}>SmartLeave</motion.h1>
          <p style={{ color: 'var(--text-muted)' }}>Enter your credentials to continue</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '16px', outline: 'none', boxSizing: 'border-box' }}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'rgba(255,255,255,0.4)' }} />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '14px 16px 14px 48px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '16px', outline: 'none', boxSizing: 'border-box' }}
                required
              />
            </div>
          </div>

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="primary" style={{ width: '100%', padding: '16px', borderRadius: '16px' }}>Sign In</motion.button>
        </form>
      </motion.div>
    </div>
  );
};

const TeamCalendar = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const awayEmployees = [
    { day: 5, name: 'Alice', type: 'Sick' },
    { day: 12, name: 'Tom', type: 'Vacation' },
    { day: 12, name: 'Neha', type: 'Casual' },
    { day: 18, name: 'CS', type: 'Vacation' },
    { day: 24, name: 'Alice', type: 'Sick' },
    { day: 28, name: 'Namana', type: 'Casual' },
  ];

  return (
    <div className="glass-card" style={{ marginTop: '0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}><CalendarIcon size={20} color="var(--accent-blue)" /> Team Availability</h3>
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>February 2026</span>
      </div>
      <div className="calendar-grid">
        {days.map(d => {
          const away = awayEmployees.filter(e => e.day === d);
          return (
            <motion.div
              key={d}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
              className={`calendar-day ${away.length > 0 ? 'active' : ''}`}
            >
              <span>{d}</span>
              <div style={{ display: 'flex', gap: '2px', flexWrap: 'wrap' }}>
                {away.map((a, i) => (
                  <div key={i} className="calendar-dot" style={{
                    background: a.type === 'Sick' ? '#ef4444' : a.type === 'Vacation' ? '#3b82f6' : '#22c55e'
                  }} title={`${a.name} is away (${a.type})`} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div className="calendar-dot" style={{ background: '#22c55e', marginTop: 0 }} /> Casual</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div className="calendar-dot" style={{ background: '#3b82f6', marginTop: 0 }} /> Vacation</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div className="calendar-dot" style={{ background: '#ef4444', marginTop: 0 }} /> Sick</div>
      </div>
    </div>
  );
};

const LeaveChart = () => {
  const data = [
    { label: 'Jan', value: 45 },
    { label: 'Feb', value: 80 },
    { label: 'Mar', value: 30 },
    { label: 'Apr', value: 65 },
    { label: 'May', value: 90 },
    { label: 'Jun', value: 50 },
  ];

  return (
    <div className="glass-card">
      <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}><BarChart3 size={20} color="var(--accent-purple)" /> Leave Insights</h3>
      <div className="chart-container">
        {data.map((d, i) => (
          <div key={i} className="bar-wrapper">
            <motion.div
              className="bar"
              initial={{ height: 0 }}
              animate={{ height: `${d.value}%` }}
              transition={{ delay: i * 0.1, duration: 1 }}
            />
            <span className="bar-label">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const NotificationsDropdown = ({ notifications, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 10, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    className="notifications-dropdown"
  >
    <div className="notif-header">
      <span style={{ fontWeight: 700 }}>Notifications</span>
      <span style={{ fontSize: '0.75rem', color: 'var(--accent-blue)', cursor: 'pointer' }} onClick={onClose}>Close</span>
    </div>
    <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {notifications.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No new notifications</div>
      ) : (
        notifications.map(n => (
          <div key={n.id} className="notif-item">
            <div style={{ fontSize: '0.9rem', marginBottom: '4px' }}>{n.text}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{n.time}</div>
          </div>
        ))
      )}
    </div>
  </motion.div>
);

const Dashboard = ({ applications, setTab, notifications }) => {
  const [showNotifs, setShowNotifs] = useState(false);
  const stats = {
    allowance: 24,
    used: applications.filter(a => a.status === 'approved' && a.applicantName === 'Alice Smith').length * 2,
    balance: 0
  };
  stats.balance = stats.allowance - stats.used;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="page-header">
        <AnimatedTitle color="accent">Dashboard</AnimatedTitle>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowNotifs(!showNotifs)}>
            <Bell size={24} color={showNotifs ? "white" : "var(--text-muted)"} />
            {notifications.length > 0 && <div className="notification-badge">{notifications.length}</div>}
          </div>

          <AnimatePresence>
            {showNotifs && (
              <NotificationsDropdown
                notifications={notifications}
                onClose={() => setShowNotifs(false)}
              />
            )}
          </AnimatePresence>

          <button className="primary" onClick={() => setTab('apply')}>New Request</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2.5rem' }}>
        <div className="card-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
          <div className="glass-card stat-card" style={{ borderBottom: '4px solid var(--accent-blue)' }}>
            <span className="stat-label">Yearly Allowance</span>
            <span className="stat-value">{stats.allowance} Days</span>
          </div>
          <div className="glass-card stat-card" style={{ borderBottom: '4px solid #22c55e' }}>
            <span className="stat-label">Balance</span>
            <span className="stat-value" style={{ color: '#22c55e' }}>{stats.balance} Days</span>
          </div>
          <div className="glass-card stat-card" style={{ borderBottom: '4px solid var(--accent-purple)', gridColumn: 'span 2' }}>
            <span className="stat-label">Used Leave</span>
            <span className="stat-value">{stats.used} Days</span>
          </div>
        </div>
        <LeaveChart />
      </div>

      <h2 style={{ marginBottom: '1.5rem' }}>Your Progress</h2>
      <div className="glass-card" style={{ padding: '0' }}>
        {applications.filter(a => a.applicantName === 'Alice Smith').length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>No recent leave applications</div>
        ) : (
          applications.filter(a => a.applicantName === 'Alice Smith').slice(0, 3).map(app => (
            <div key={app.id} className="list-item" style={{ borderBottom: '1px solid var(--glass-border)', margin: 0, borderRadius: 0, padding: '1.25rem 2rem' }}>
              <div>
                <div style={{ fontWeight: 600 }}>{app.type}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{app.startDate} - {app.endDate}</div>
              </div>
              <span className={`status-badge status-${app.status}`}>{app.status.charAt(0).toUpperCase() + app.status.slice(1)}</span>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

const ApplyLeave = ({ onAdd, setTab }) => {
  const [formData, setFormData] = useState({
    type: 'Casual Leave',
    startDate: '',
    endDate: '',
    reason: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      ...formData,
      id: Date.now(),
      applicantName: 'Alice Smith',
      status: 'pending'
    });
    setTab('dashboard');
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
      <div className="page-header">
        <AnimatedTitle color="warning">Apply Leave</AnimatedTitle>
      </div>
      <form className="glass-card" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Leave Type</label>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '12px' }}
          >
            <option>Casual Leave</option>
            <option>Sick Leave</option>
            <option>Vacation</option>
          </select>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Start Date</label>
            <input
              type="date"
              required
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '12px' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>End Date</label>
            <input
              type="date"
              required
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
              style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '12px' }}
            />
          </div>
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Reason</label>
          <textarea
            required
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            placeholder="Reason for leave..."
            style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '12px', minHeight: '100px' }}
          ></textarea>
        </div>
        <button type="submit" className="primary" style={{ width: '100%' }}>Submit Application</button>
      </form>
    </motion.div>
  );
};

const ActionCenter = ({ applications, onStatusUpdate }) => {
  const pendingApps = applications.filter(a => a.status === 'pending');

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="page-header">
        <AnimatedTitle color="success">Action Center</AnimatedTitle>
      </div>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ flex: 1, padding: '1rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{pendingApps.length}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Pending Reviews</div>
        </div>
        <div className="glass-card" style={{ flex: 1, padding: '1rem', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{applications.filter(a => a.status === 'approved').length}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Approved (MTD)</div>
        </div>
      </div>
      {pendingApps.length === 0 ? (
        <div className="glass-card" style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '3rem' }}>All clear! No pending applications.</div>
      ) : (
        pendingApps.map(app => (
          <div key={app.id} className="list-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1rem', padding: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{app.applicantName}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{app.type} | {app.startDate} - {app.endDate}</div>
                <div style={{ fontSize: '0.85rem', marginTop: '10px', color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' }}>"{app.reason}"</div>
              </div>
              <span className="status-badge status-pending">Pending Review</span>
            </div>
            <div style={{ display: 'flex', gap: '1rem', width: '100%', marginTop: '0.5rem' }}>
              <button
                onClick={() => onStatusUpdate(app.id, 'approved')}
                className="primary"
                style={{ flex: 1, background: 'rgba(34, 197, 94, 0.2)', color: '#4ade80', border: '1px solid rgba(34, 197, 94, 0.3)' }}
              >Approve</button>
              <button
                onClick={() => onStatusUpdate(app.id, 'rejected')}
                style={{ flex: 1, padding: '12px', borderRadius: '12px', border: '1px solid #ef4440', color: '#ef4440', background: 'rgba(239, 68, 64, 0.1)', cursor: 'pointer', fontWeight: 600 }}
              >Reject</button>
            </div>
          </div>
        ))
      )}
    </motion.div>
  );
};

const EmployeeHistory = ({ emp, applications, onBack }) => {
  const empApps = applications.filter(a => a.applicantName === emp.name);
  const totalApproved = empApps.filter(a => a.status === 'approved').length;

  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="page-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={onBack} style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', cursor: 'pointer', display: 'flex' }}><ChevronLeft /></button>
          <AnimatedTitle color="accent">{emp.name}</AnimatedTitle>
        </div>
      </div>

      <div className="card-grid" style={{ marginBottom: '2.5rem' }}>
        <div className="glass-card stat-card" style={{ borderLeft: '4px solid var(--accent-blue)' }}>
          <span className="stat-label">Contact Email</span>
          <span className="stat-value" style={{ fontSize: '1.2rem' }}>{emp.email}</span>
        </div>
        <div className="glass-card stat-card" style={{ borderLeft: '4px solid #22c55e' }}>
          <span className="stat-label">Approved Leaves</span>
          <span className="stat-value">{totalApproved}</span>
        </div>
        <div className="glass-card stat-card" style={{ borderLeft: '4px solid #eab308' }}>
          <span className="stat-label">Pending Requests</span>
          <span className="stat-value">{empApps.filter(a => a.status === 'pending').length}</span>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Activity size={20} color="var(--accent-purple)" /> Leave History</h3>
        {empApps.length === 0 ? (
          <div style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No history found for this employee.</div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {empApps.map(app => (
              <div key={app.id} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid var(--glass-border)' }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{app.type}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{app.startDate} - {app.endDate}</div>
                </div>
                <span className={`status-badge status-${app.status}`}>{app.status}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

const EmployeeDirectory = ({ setTab, setSelectedEmp }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const employees = [
    { name: 'neha', email: 'neha@test.com' },
    { name: 'km', email: 'km@test.com' },
    { name: 'csjdh', email: 'sdj@test.com' },
    { name: 'Alice Smith', email: 'alice@test.com' },
    { name: 'Namana MR', email: 'namana@gmail.com' },
    { name: 'Likhitha HS', email: 'likitha@gmail.com' },
    { name: 'Tom', email: 'tom@test.com' }
  ];

  const filtered = employees.filter(e =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewDetails = (emp) => {
    setSelectedEmp(emp);
    setTab('emp-history');
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
      <div className="page-header">
        <AnimatedTitle color="accent">Directory</AnimatedTitle>
        <div className="glass-card" style={{ padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '10px', margin: 0 }}>
          <Search size={18} color="var(--text-muted)" />
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search employees..."
            style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', fontSize: '0.9rem', width: '200px' }}
          />
        </div>
      </div>
      <div>
        {filtered.length === 0 ? (
          <div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>No employees found matching "{searchTerm}"</div>
        ) : (
          filtered.map((emp, index) => (
            <div key={index} className="list-item" style={{ cursor: 'pointer' }} onClick={() => handleViewDetails(emp)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: '45px', height: '45px', background: 'var(--glass-bg)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}><UserCircle size={24} color="var(--accent-blue)" /></div>
                <div>
                  <div style={{ fontWeight: 600 }}>{emp.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{emp.email}</div>
                </div>
              </div>
              <div style={{ color: 'var(--text-muted)' }}><ChevronRight size={18} /></div>
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
};

const HolidayList = () => {
  const holidays = [
    { date: 'Jan 26', name: 'Republic Day', type: 'Public' },
    { date: 'Mar 14', name: 'Holi', type: 'Festival' },
    { date: 'Aug 15', name: 'Independence Day', type: 'Public' },
    { date: 'Oct 02', name: 'Gandhi Jayanti', type: 'Public' },
    { date: 'Dec 25', name: 'Christmas', type: 'Holiday' },
  ];

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
      <div className="page-header">
        <AnimatedTitle color="success">Holidays 2026</AnimatedTitle>
      </div>
      <div style={{ maxWidth: '800px' }}>
        {holidays.map((h, i) => (
          <div key={i} className="holiday-card">
            <div className="holiday-date">
              <div style={{ fontSize: '1rem', fontWeight: 800 }}>{h.date.split(' ')[1]}</div>
              <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>{h.date.split(' ')[0]}</div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{h.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Status: Mandatory Holiday</div>
            </div>
            <span className="status-badge" style={{ background: 'rgba(251, 191, 36, 0.1)', color: '#fbbf24' }}>{h.type}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SettingsPage = ({ settings, onToggle }) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
      <div className="page-header">
        <AnimatedTitle>Settings</AnimatedTitle>
      </div>
      <div className="glass-card" style={{ maxWidth: '700px' }}>
        <h3 style={{ marginBottom: '1.5rem' }}>Profile Information</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Full Name</label>
            <input defaultValue="Alice Smith" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '12px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Employee ID</label>
            <input defaultValue="EMP-7829" disabled style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)', color: 'rgba(255,255,255,0.5)', borderRadius: '12px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '2.5rem' }}>
          <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Bio</label>
          <textarea defaultValue="Senior Product Designer at SmartLeave." style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', color: 'white', borderRadius: '12px', minHeight: '80px' }} />
        </div>

        <h3 style={{ marginBottom: '1.5rem' }}>Theme & Notifications</h3>

        <div className="list-item" style={{ background: 'rgba(255,255,255,0.02)', marginBottom: '1rem', cursor: 'pointer' }} onClick={() => onToggle('darkMode')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {settings.darkMode ? <Moon size={20} color="var(--accent-blue)" /> : <Sun size={20} />}
            <span>Dark Appearance</span>
          </div>
          <div style={{ width: '40px', height: '22px', background: settings.darkMode ? 'var(--accent-blue)' : 'rgba(255,255,255,0.1)', borderRadius: '20px', position: 'relative', transition: '0.3s' }}>
            <motion.div
              animate={{ x: settings.darkMode ? 18 : 2 }}
              style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px' }}
            />
          </div>
        </div>

        <div className="list-item" style={{ background: 'rgba(255,255,255,0.02)', cursor: 'pointer' }} onClick={() => onToggle('notifications')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Bell size={20} color={settings.notifications ? "var(--accent-blue)" : "var(--text-muted)"} />
            <span>Email Notifications</span>
          </div>
          <div style={{ width: '40px', height: '22px', background: settings.notifications ? 'var(--accent-blue)' : 'rgba(255,255,255,0.1)', borderRadius: '20px', position: 'relative', transition: '0.3s' }}>
            <motion.div
              animate={{ x: settings.notifications ? 18 : 2 }}
              style={{ width: '18px', height: '18px', background: 'white', borderRadius: '50%', position: 'absolute', top: '2px' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AdminPanel = ({ leaveTypes, onAddType }) => {
  const stats = [
    { label: 'Total Employees', value: '124', icon: <Users />, color: 'var(--accent-blue)' },
    { label: 'Active Leave Types', value: leaveTypes.length.toString(), icon: <Activity />, color: 'var(--accent-purple)' },
    { label: 'System Uptime', value: '99.9%', icon: <BarChart3 />, color: '#22c55e' },
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
      <div className="page-header">
        <AnimatedTitle color="admin">Admin Panel</AnimatedTitle>
        <button className="primary" onClick={onAddType} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><PlusCircle size={18} /> New Type</button>
      </div>

      <div className="card-grid" style={{ marginBottom: '3rem' }}>
        {stats.map((s, idx) => (
          <div key={idx} className="glass-card stat-card" style={{ borderTop: `4px solid ${s.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="stat-label">{s.label}</span>
              <span style={{ color: s.color }}>{s.icon}</span>
            </div>
            <span className="stat-value">{s.value}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '2rem' }}>
        <div className="glass-card">
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck size={20} color="#fbbf24" /> Manage Leave Types</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {leaveTypes.map((type, idx) => (
              <div key={idx} className="list-item" style={{ background: 'rgba(255,255,255,0.02)', margin: 0 }}>
                <div>
                  <div style={{ fontWeight: 600 }}>{type.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Limit: {type.limit}</div>
                </div>
                <span className="status-badge" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>{type.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card">
          <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}><Clock size={20} color="var(--accent-blue)" /> System Logs</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.85rem' }}>
            <div style={{ color: 'var(--text-muted)' }}>[10:15 AM] New user Alice signed in</div>
            <div style={{ color: 'var(--text-muted)' }}>[09:30 AM] Admin updated "{leaveTypes[0]?.name}" limits</div>
            <div style={{ color: 'var(--text-muted)' }}>[Yesterday] 3 leave requests approved</div>
            <div style={{ color: 'var(--text-muted)' }}>[Yesterday] Backup completed successfully</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [settings, setSettings] = useState({ darkMode: true, notifications: true });
  const [leaveTypes, setLeaveTypes] = useState([
    { name: 'Casual Leave', limit: '12 Days', status: 'Active' },
    { name: 'Sick Leave', limit: '10 Days', status: 'Active' },
    { name: 'Vacation', limit: '15 Days', status: 'Active' },
    { name: 'Maternity Leave', limit: '90 Days', status: 'Active' },
  ]);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'Your leave for Feb 10 was approved!', time: '2h ago' },
    { id: 2, text: 'New mandatory holiday added: Republic Day', time: 'Yesterday' }
  ]);
  const [applications, setApplications] = useState([
    { id: 1, applicantName: 'Namana MR', type: 'Casual Leave', startDate: '2026-10-10', endDate: '2026-10-12', status: 'pending', reason: 'Going for a trip' },
    { id: 2, applicantName: 'Alice Smith', type: 'Sick Leave', startDate: '2026-02-10', endDate: '2026-02-11', status: 'approved', reason: 'Fever' },
    { id: 3, applicantName: 'neha', type: 'Vacation', startDate: '2026-05-01', endDate: '2026-05-15', status: 'approved', reason: 'Summer trip' },
    { id: 4, applicantName: 'Namana MR', type: 'Sick Leave', startDate: '2026-01-24', endDate: '2026-01-26', status: 'approved', reason: 'Common cold' }
  ]);

  const handleToggleSetting = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));

    // Aesthetic side effect for demo
    if (key === 'darkMode') {
      document.body.style.filter = settings.darkMode ? 'grayscale(0.5) brightness(0.8)' : 'none';
    }
  };

  const handleAddLeaveType = () => {
    const name = prompt("Enter Leave Type Name:");
    if (name) {
      const limit = prompt("Enter Yearly Limit (e.g. 15 Days):");
      if (limit) {
        setLeaveTypes([...leaveTypes, { name, limit, status: 'Active' }]);
        setNotifications([{ id: Date.now(), text: `New leave type "${name}" added to system`, time: 'Just now' }, ...notifications]);
      }
    }
  };

  if (!isAuthenticated) {
    return <SignIn onLogin={() => setIsAuthenticated(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard applications={applications} setTab={setActiveTab} notifications={notifications} />;
      case 'schedule': return (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <div className="page-header">
            <AnimatedTitle color="accent">Team Schedule</AnimatedTitle>
          </div>
          <TeamCalendar />
        </motion.div>
      );
      case 'apply': return <ApplyLeave onAdd={(app) => {
        setApplications([app, ...applications]);
        setNotifications([{ id: Date.now(), text: `Application for ${app.type} submitted!`, time: 'Just now' }, ...notifications]);
      }} setTab={setActiveTab} />;
      case 'action': return <ActionCenter applications={applications} onStatusUpdate={(id, status) => setApplications(applications.map(a => a.id === id ? { ...a, status } : a))} />;
      case 'directory': return <EmployeeDirectory setTab={setActiveTab} setSelectedEmp={setSelectedEmp} />;
      case 'emp-history': return <EmployeeHistory emp={selectedEmp} applications={applications} onBack={() => setActiveTab('directory')} />;
      case 'admin': return <AdminPanel leaveTypes={leaveTypes} onAddType={handleAddLeaveType} />;
      case 'holidays': return <HolidayList />;
      case 'settings': return <SettingsPage settings={settings} onToggle={handleToggleSetting} />;
      default: return <Dashboard applications={applications} setTab={setActiveTab} notifications={notifications} />;
    }
  };

  return (
    <>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={() => setIsAuthenticated(false)} notificationsCount={notifications.length} />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default App;
