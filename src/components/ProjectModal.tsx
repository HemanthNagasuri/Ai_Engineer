import React, { useState, useEffect } from 'react';
import { X, Check, Copy, Terminal, Code2, BookOpen, AlertCircle, Play } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'code' | 'concepts'>('simulator');
  const [copiedCode, setCopiedCode] = useState(false);

  // Simulator states for each project
  // Voter Simulator
  const [voterAge, setVoterAge] = useState<string>('18');
  const [voterResult, setVoterResult] = useState<string | null>(null);

  // Calculator Simulator
  const [calcNum1, setCalcNum1] = useState<string>('10');
  const [calcNum2, setCalcNum2] = useState<string>('5');
  const [calcOp, setCalcOp] = useState<string>('add');
  const [calcResult, setCalcResult] = useState<string | null>(null);

  // ATM Simulator
  const [atmPin, setAtmPin] = useState<string>('1234');
  const [atmEnteredPin, setAtmEnteredPin] = useState<string>('1234');
  const [atmAuthenticated, setAtmAuthenticated] = useState<boolean>(true);
  const [atmBalance, setAtmBalance] = useState<number>(1000);
  const [atmAmount, setAtmAmount] = useState<string>('150');
  const [atmMessage, setAtmMessage] = useState<string>('Session active. Current Balance: $1000.00');

  // Grade Calculator Simulator
  const [gradeMath, setGradeMath] = useState<number>(85);
  const [gradeCS, setGradeCS] = useState<number>(92);
  const [gradePhysics, setGradePhysics] = useState<number>(78);
  const [gradeEnglish, setGradeEnglish] = useState<number>(88);
  const [gradeResult, setGradeResult] = useState<{
    total: number;
    percentage: number;
    grade: string;
  } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(project.pythonCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Run Voter Simulation
  const handleVoterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const age = parseInt(voterAge, 10);
    if (isNaN(age)) {
      setVoterResult('Error: Please enter a valid numerical age.');
      return;
    }
    if (age < 0) {
      setVoterResult('Invalid input: Age cannot be negative.');
    } else if (age >= 18) {
      setVoterResult(`Eligible: At ${age} years old, you meet the legal statutory requirement to vote.`);
    } else {
      const remaining = 18 - age;
      setVoterResult(`Not eligible: At ${age} years old, you need to wait ${remaining} more year(s) to vote.`);
    }
  };

  // Run Calculator Simulation
  const handleCalcSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const n1 = parseFloat(calcNum1);
    const n2 = parseFloat(calcNum2);
    if (isNaN(n1) || isNaN(n2)) {
      setCalcResult('Error: Both values must be valid numbers.');
      return;
    }
    switch (calcOp) {
      case 'add':
        setCalcResult(`${n1} + ${n2} = ${(n1 + n2).toLocaleString()}`);
        break;
      case 'subtract':
        setCalcResult(`${n1} - ${n2} = ${(n1 - n2).toLocaleString()}`);
        break;
      case 'multiply':
        setCalcResult(`${n1} × ${n2} = ${(n1 * n2).toLocaleString()}`);
        break;
      case 'divide':
        if (n2 === 0) {
          setCalcResult('ZeroDivisionError: Cannot divide by zero.');
        } else {
          setCalcResult(`${n1} ÷ ${n2} = ${(n1 / n2).toFixed(4)}`);
        }
        break;
      default:
        setCalcResult('Unknown operation');
    }
  };

  // ATM Actions
  const handleAtmAuth = () => {
    if (atmEnteredPin === '1234') {
      setAtmAuthenticated(true);
      setAtmMessage('PIN authenticated successfully.');
    } else {
      setAtmAuthenticated(false);
      setAtmMessage('Authentication failed: Incorrect PIN (Demo default is 1234).');
    }
  };

  const handleAtmDeposit = () => {
    const val = parseFloat(atmAmount);
    if (isNaN(val) || val <= 0) {
      setAtmMessage('Error: Please enter a positive deposit amount.');
      return;
    }
    const newBal = atmBalance + val;
    setAtmBalance(newBal);
    setAtmMessage(`Successfully deposited $${val.toFixed(2)}. New Balance: $${newBal.toFixed(2)}`);
  };

  const handleAtmWithdraw = () => {
    const val = parseFloat(atmAmount);
    if (isNaN(val) || val <= 0) {
      setAtmMessage('Error: Please enter a positive withdrawal amount.');
      return;
    }
    if (val > atmBalance) {
      setAtmMessage(`Transaction Declined: Insufficient balance. Available funds: $${atmBalance.toFixed(2)}`);
      return;
    }
    const newBal = atmBalance - val;
    setAtmBalance(newBal);
    setAtmMessage(`Successfully dispensed $${val.toFixed(2)}. Remaining Balance: $${newBal.toFixed(2)}`);
  };

  // Grade Calculator
  const handleGradeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const scores = [gradeMath, gradeCS, gradePhysics, gradeEnglish];
    const total = scores.reduce((acc, curr) => acc + curr, 0);
    const percentage = total / 4;
    let grade = '';
    if (percentage >= 90) grade = 'A+ (Outstanding)';
    else if (percentage >= 80) grade = 'A (Excellent)';
    else if (percentage >= 70) grade = 'B (Good)';
    else if (percentage >= 60) grade = 'C (Satisfactory)';
    else if (percentage >= 50) grade = 'D (Pass)';
    else grade = 'F (Needs Improvement)';

    setGradeResult({ total, percentage, grade });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="font-semibold text-slate-900">Python Project</span>
              <span aria-hidden="true">·</span>
              <span>Foundation Logic</span>
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-slate-900 mt-0.5">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-2"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 pt-3 border-b border-slate-200 bg-white flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('simulator')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            Live Logic Simulator
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('code')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Python Source Code
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('concepts')}
            className={`px-3 py-2 text-xs font-semibold border-b-2 transition-colors flex items-center gap-1.5 ${
              activeTab === 'concepts'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Concepts & Logic Breakdown
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: Live Logic Simulator */}
          {activeTab === 'simulator' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 text-xs text-slate-600">
                <strong>Interactive Verification:</strong> Test this project&apos;s computational logic directly below. It executes the exact mathematical and conditional constraints implemented in the Python script.
              </div>

              {/* Voter Checker Simulator */}
              {project.interactiveType === 'voter' && (
                <form onSubmit={handleVoterSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="voter-age-input" className="block text-xs font-semibold text-slate-700 mb-1">
                      Enter Age (Years):
                    </label>
                    <div className="flex gap-2">
                      <input
                        id="voter-age-input"
                        type="number"
                        min="0"
                        max="120"
                        value={voterAge}
                        onChange={(e) => setVoterAge(e.target.value)}
                        className="px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 w-36"
                        required
                      />
                      <button
                        type="submit"
                        className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        Evaluate Eligibility
                      </button>
                    </div>
                  </div>

                  {voterResult && (
                    <div className="p-4 bg-slate-900 text-slate-100 font-mono text-xs rounded-xl border border-slate-800 space-y-1">
                      <div className="text-slate-400 text-[11px]">Program Output:</div>
                      <div className="text-emerald-300 font-medium">{voterResult}</div>
                    </div>
                  )}
                </form>
              )}

              {/* Calculator Simulator */}
              {project.interactiveType === 'calculator' && (
                <form onSubmit={handleCalcSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="calc-first-num" className="block text-xs font-semibold text-slate-700 mb-1">
                        First Number:
                      </label>
                      <input
                        id="calc-first-num"
                        type="number"
                        step="any"
                        value={calcNum1}
                        onChange={(e) => setCalcNum1(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="calc-op-select" className="block text-xs font-semibold text-slate-700 mb-1">
                        Operation:
                      </label>
                      <select
                        id="calc-op-select"
                        value={calcOp}
                        onChange={(e) => setCalcOp(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white"
                      >
                        <option value="add">Addition (+)</option>
                        <option value="subtract">Subtraction (-)</option>
                        <option value="multiply">Multiplication (×)</option>
                        <option value="divide">Division (÷)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="calc-second-num" className="block text-xs font-semibold text-slate-700 mb-1">
                        Second Number:
                      </label>
                      <input
                        id="calc-second-num"
                        type="number"
                        step="any"
                        value={calcNum2}
                        onChange={(e) => setCalcNum2(e.target.value)}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Calculate Result
                  </button>

                  {calcResult && (
                    <div className="p-4 bg-slate-900 text-slate-100 font-mono text-xs rounded-xl border border-slate-800 space-y-1">
                      <div className="text-slate-400 text-[11px]">Evaluation Output:</div>
                      <div className="text-sky-300 font-semibold">{calcResult}</div>
                    </div>
                  )}
                </form>
              )}

              {/* ATM Simulator */}
              {project.interactiveType === 'atm' && (
                <div className="space-y-4">
                  {/* PIN Check */}
                  <div className="p-3 bg-slate-100 rounded-lg flex items-center justify-between text-xs">
                    <span className="text-slate-700">
                      Simulated Card Status: <strong>Inserted</strong> (Demo PIN: <strong>1234</strong>)
                    </span>
                    <div className="flex items-center gap-2">
                      <input
                        type="password"
                        maxLength={4}
                        value={atmEnteredPin}
                        onChange={(e) => setAtmEnteredPin(e.target.value)}
                        placeholder="PIN"
                        className="w-16 px-2 py-1 text-xs border border-slate-300 rounded bg-white font-mono"
                      />
                      <button
                        type="button"
                        onClick={handleAtmAuth}
                        className="px-2.5 py-1 text-xs font-medium bg-slate-800 text-white rounded hover:bg-slate-700"
                      >
                        Verify
                      </button>
                    </div>
                  </div>

                  {/* ATM Console */}
                  <div className="bg-slate-900 p-4 rounded-xl text-slate-100 space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400">
                      <span>ATM Transaction State</span>
                      <span className="text-emerald-400">Balance: ${atmBalance.toFixed(2)}</span>
                    </div>

                    <div className="text-slate-300 text-xs">
                      &gt; {atmMessage}
                    </div>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <input
                        type="number"
                        min="1"
                        step="10"
                        value={atmAmount}
                        onChange={(e) => setAtmAmount(e.target.value)}
                        className="w-28 px-2 py-1.5 bg-slate-800 border border-slate-700 text-white rounded text-xs"
                        placeholder="Amount"
                      />
                      <button
                        type="button"
                        onClick={handleAtmDeposit}
                        disabled={!atmAuthenticated}
                        className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 text-white rounded font-sans text-xs font-semibold"
                      >
                        Deposit ($)
                      </button>
                      <button
                        type="button"
                        onClick={handleAtmWithdraw}
                        disabled={!atmAuthenticated}
                        className="px-3 py-1.5 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 text-white rounded font-sans text-xs font-semibold"
                      >
                        Withdraw ($)
                      </button>
                      <button
                        type="button"
                        onClick={() => setAtmMessage(`Inquiry: Current Available Funds are $${atmBalance.toFixed(2)}`)}
                        disabled={!atmAuthenticated}
                        className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-white rounded font-sans text-xs"
                      >
                        Check Balance
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Student Grade Calculator Simulator */}
              {project.interactiveType === 'grade' && (
                <form onSubmit={handleGradeSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div>
                      <label htmlFor="grade-math" className="block text-xs font-semibold text-slate-700 mb-1">
                        Mathematics:
                      </label>
                      <input
                        id="grade-math"
                        type="number"
                        min="0"
                        max="100"
                        value={gradeMath}
                        onChange={(e) => setGradeMath(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="grade-cs" className="block text-xs font-semibold text-slate-700 mb-1">
                        Computer Science:
                      </label>
                      <input
                        id="grade-cs"
                        type="number"
                        min="0"
                        max="100"
                        value={gradeCS}
                        onChange={(e) => setGradeCS(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="grade-physics" className="block text-xs font-semibold text-slate-700 mb-1">
                        Physics:
                      </label>
                      <input
                        id="grade-physics"
                        type="number"
                        min="0"
                        max="100"
                        value={gradePhysics}
                        onChange={(e) => setGradePhysics(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="grade-english" className="block text-xs font-semibold text-slate-700 mb-1">
                        English:
                      </label>
                      <input
                        id="grade-english"
                        type="number"
                        min="0"
                        max="100"
                        value={gradeEnglish}
                        onChange={(e) => setGradeEnglish(Number(e.target.value))}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    Compute Academic Grade
                  </button>

                  {gradeResult && (
                    <div className="p-4 bg-slate-900 text-slate-100 font-mono text-xs rounded-xl border border-slate-800 space-y-1.5">
                      <div className="text-slate-400 text-[11px]">Computed Academic Transcript:</div>
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span>Total Score:</span>
                        <span className="text-slate-200">{gradeResult.total} / 400</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800 pb-1">
                        <span>Cumulative Percentage:</span>
                        <span className="text-sky-300">{gradeResult.percentage.toFixed(2)}%</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span>Assigned Letter Grade:</span>
                        <span className="text-emerald-400 font-bold">{gradeResult.grade}</span>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>
          )}

          {/* TAB 2: Python Source Code */}
          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Complete Python Source File</span>
                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCode ? 'Copied to Clipboard' : 'Copy Code'}
                </button>
              </div>

              <div className="relative bg-slate-950 text-slate-200 rounded-xl p-4 font-mono text-xs overflow-x-auto border border-slate-800 max-h-96">
                <pre>{project.pythonCode}</pre>
              </div>
            </div>
          )}

          {/* TAB 3: Concepts & Logic */}
          {activeTab === 'concepts' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Architecture & Purpose</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{project.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Key Programming Concepts Practiced</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.concepts.map((concept) => (
                    <div
                      key={concept}
                      className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                      <span>{concept}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-600" />
                  Academic Context
                </div>
                <p>
                  Built during early semester 1 practical exercises to master algorithmic thinking before progressing to complex object-oriented patterns and data structures.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div className="text-slate-500">
            <span>Repository Status: </span>
            <span className="text-slate-700 font-medium">Local Foundation Project</span>
          </div>

          <div className="flex items-center space-x-2">
            {/* User instructions state: If project GitHub links are unavailable, show appropriate "View Project" buttons as disabled/placeholders rather than creating fake URLs. */}
            <button
              type="button"
              disabled
              title="GitHub repository upload pending for student academic scripts"
              className="px-3 py-1.5 text-xs font-medium text-slate-400 bg-slate-200/80 rounded-lg cursor-not-allowed"
            >
              GitHub Repo (Pending Upload)
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
