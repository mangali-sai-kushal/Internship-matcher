
import React, { useState } from 'react';
import { User } from '../types';

interface Props {
  user: User;
  onSave: (user: User) => void;
}

const Profile: React.FC<Props> = ({ user, onSave }) => {
  const [resumeText, setResumeText] = useState(user.resume || '');
  const [education, setEducation] = useState(user.education || '');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>(user.skills || []);

  const handleAddSkill = () => {
    if (skillInput && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleSave = () => {
    onSave({
      ...user,
      resume: resumeText,
      education,
      skills,
      profileCompleted: !!(resumeText && education && skills.length > 0)
    });
    alert('Profile saved successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto py-8 transition-colors">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">My Profile</h1>
      
      <div className="space-y-8">
        {/* Education Section */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">College Details</h3>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">University / College Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="e.g. VTU, Anna University affiliate..."
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Skills</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              className="flex-grow px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
              placeholder="React, Java, Python..."
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
            />
            <button
              onClick={handleAddSkill}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <span key={idx} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 rounded-full text-sm flex items-center gap-2">
                {skill}
                <button onClick={() => setSkills(skills.filter(s => s !== skill))} className="hover:text-red-500">×</button>
              </span>
            ))}
          </div>
        </div>

        {/* Resume Content Section */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">Resume Content</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Paste your resume text here for our AI to analyze and find the best matches.</p>
          <textarea
            className="w-full h-64 px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm outline-none transition-all"
            placeholder="Paste your experience, projects, and bio here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-10 py-3 bg-indigo-600 text-white font-bold rounded-xl shadow-lg hover:bg-indigo-700 transition-all"
          >
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
