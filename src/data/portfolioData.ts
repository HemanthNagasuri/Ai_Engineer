import { Project, SkillCategory, RoadmapStage, HackathonLesson } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Hemanth N.',
  role: 'Aspiring AI Engineer | B.Tech CSE (AI/ML) Student',
  status: 'First-semester B.Tech Student',
  education: 'B.Tech in Computer Science & Engineering (AI/ML specialization)',
  heroIntro: "Hi, I'm Hemanth.",
  heroHeadline: 'An aspiring AI Engineer building my foundation in Python, Web Development & Generative AI.',
  heroDescription:
    'I\'m a first-semester B.Tech CSE student exploring AI, software development, and practical problem solving through projects, hackathons, and continuous learning.',
  socials: {
    github: 'https://github.com/HemanthNagasuri',
    linkedin: 'https://www.linkedin.com/in/hemanth-nagasuri-2190ab388/',
  },
  learningProgression: [
    { title: 'Python', status: 'Learning' },
    { title: 'Web Development', status: 'Learning' },
    { title: 'Generative AI', status: 'Learning' },
    { title: 'AI / ML', status: 'Exploring' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Checker',
    shortDescription:
      'A beginner Python project that determines whether a person is eligible to vote based on their age.',
    technology: 'Python',
    concepts: ['User Input Handling', 'Conditional Statements', 'Age Threshold Logic', 'Type Conversion'],
    fullDescription:
      'A practical console program that prompts the user for their age, validates integer input, and applies conditional logic to determine eligibility for statutory voting (18+). It demonstrates the fundamental principles of control flow and boundary validation.',
    interactiveType: 'voter',
    githubAvailable: false,
    pythonCode: `# Voter Eligibility Checker
# Demonstrates fundamental input handling and conditional logic in Python

def check_voting_eligibility():
    print("=== Voter Eligibility Checker ===")
    try:
        age_input = input("Enter your age: ")
        age = int(age_input)
        
        if age < 0:
            print("Invalid input: Age cannot be negative.")
        elif age >= 18:
            print(f"Eligible: At {age} years old, you are legally eligible to vote.")
        else:
            years_left = 18 - age
            print(f"Not eligible: You need to wait {years_left} more year(s) to vote.")
    except ValueError:
        print("Error: Please enter a valid whole number for your age.")

if __name__ == "__main__":
    check_voting_eligibility()
`,
  },
  {
    id: 'calculator',
    title: 'Calculator',
    shortDescription:
      'A simple calculator project demonstrating fundamental programming concepts and user input handling.',
    technology: 'Python',
    concepts: ['Arithmetic Operators', 'Function Modularization', 'Error Handling (Division by Zero)', 'Input Parsing'],
    fullDescription:
      'A command-line mathematical utility supporting addition, subtraction, multiplication, division, modulo, and exponentiation. Built to master clean function separation, operator evaluation, and runtime exception handling.',
    interactiveType: 'calculator',
    githubAvailable: false,
    pythonCode: `# Python Command-Line Calculator
# Demonstrates arithmetic logic, function definitions, and error handling

def add(a, b): return a + b
def subtract(a, b): return a - b
def multiply(a, b): return a * b
def divide(a, b):
    if b == 0:
        return "Error: Cannot divide by zero."
    return a / b

def run_calculator():
    print("=== Simple Python Calculator ===")
    print("Operations: 1. Add  2. Subtract  3. Multiply  4. Divide")
    
    choice = input("Select operation (1-4): ").strip()
    if choice not in ['1', '2', '3', '4']:
        print("Invalid operation choice.")
        return

    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
        
        if choice == '1':
            print(f"Result: {num1} + {num2} = {add(num1, num2)}")
        elif choice == '2':
            print(f"Result: {num1} - {num2} = {subtract(num1, num2)}")
        elif choice == '3':
            print(f"Result: {num1} * {num2} = {multiply(num1, num2)}")
        elif choice == '4':
            print(f"Result: {num1} / {num2} = {divide(num1, num2)}")
    except ValueError:
        print("Error: Please provide valid numeric inputs.")

if __name__ == "__main__":
    run_calculator()
`,
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    shortDescription:
      'A beginner-level ATM simulation project demonstrating concepts such as user input, balance management, transactions, and conditional logic.',
    technology: 'Python',
    concepts: ['State Management', 'While Loops', 'Transaction Validation', 'Conditional Branching'],
    fullDescription:
      'An interactive simulation of automated teller machine (ATM) operations. It tracks account balance state across sequential operations including PIN verification, balance inquiries, deposit crediting, and withdrawal limit validation.',
    interactiveType: 'atm',
    githubAvailable: false,
    pythonCode: `# ATM Management System Simulation
# Demonstrates state preservation, loops, input validation, and transaction logic

def atm_simulation():
    balance = 1000.0  # Initial simulated balance
    default_pin = "1234"
    
    print("=== Welcome to the Python ATM Simulation ===")
    entered_pin = input("Enter your 4-digit PIN: ")
    
    if entered_pin != default_pin:
        print("Authentication failed. Incorrect PIN.")
        return
        
    print("Login successful!\\n")
    
    while True:
        print("--- Menu ---")
        print("1. Check Balance")
        print("2. Deposit Money")
        print("3. Withdraw Money")
        print("4. Exit")
        
        choice = input("Enter choice (1-4): ").strip()
        
        if choice == '1':
            print(f"Your current balance is: {balance:.2f} USD")
        elif choice == '2':
            try:
                amount = float(input("Enter amount to deposit (USD): "))
                if amount > 0:
                    balance += amount
                    print(f"Deposited: {amount:.2f} USD. New Balance: {balance:.2f} USD")
                else:
                    print("Deposit amount must be positive.")
            except ValueError:
                print("Invalid input amount.")
        elif choice == '3':
            try:
                amount = float(input("Enter amount to withdraw (USD): "))
                if amount <= 0:
                    print("Withdrawal amount must be positive.")
                elif amount > balance:
                    print(f"Insufficient funds! Available: {balance:.2f} USD")
                else:
                    balance -= amount
                    print(f"Withdrawn: {amount:.2f} USD. Remaining Balance: {balance:.2f} USD")
            except ValueError:
                print("Invalid input amount.")
        elif choice == '4':
            print("Thank you for using the ATM simulation. Have a great day!")
            break
        else:
            print("Invalid choice. Please select an option between 1 and 4.")

if __name__ == "__main__":
    atm_simulation()
`,
  },
  {
    id: 'student-grade',
    title: 'Student Grade Calculator',
    shortDescription:
      'A Python project that calculates student grades based on marks and demonstrates conditional statements and basic data processing.',
    technology: 'Python',
    concepts: ['Data Aggregation', 'Percentage Computation', 'Multi-tier Grading Scale', 'Boundary Condition Checks'],
    fullDescription:
      'An educational grade evaluation script that collects subject marks, computes aggregate percentage totals, and applies institutional grading brackets (A, B, C, D, and Supplementary/Fail) while checking for valid 0–100 score ranges.',
    interactiveType: 'grade',
    githubAvailable: false,
    pythonCode: `# Student Grade Calculator
# Demonstrates data processing, numerical computation, and nested conditionals

def calculate_grade():
    print("=== Student Grade Calculator ===")
    subjects = ["Mathematics", "Computer Science", "Physics", "English"]
    marks = []
    
    for subject in subjects:
        while True:
            try:
                score = float(input(f"Enter marks for {subject} (out of 100): "))
                if 0 <= score <= 100:
                    marks.append(score)
                    break
                else:
                    print("Score must be between 0 and 100. Try again.")
            except ValueError:
                print("Please enter a valid numeric mark.")
                
    total = sum(marks)
    percentage = total / len(subjects)
    
    # Grading rubric logic
    if percentage >= 90:
        grade = "A+ (Outstanding)"
    elif percentage >= 80:
        grade = "A (Excellent)"
    elif percentage >= 70:
        grade = "B (Good)"
    elif percentage >= 60:
        grade = "C (Satisfactory)"
    elif percentage >= 50:
        grade = "D (Pass)"
    else:
        grade = "F (Needs Improvement / Repeat)"
        
    print("\\n--- Academic Summary ---")
    print(f"Total Marks: {total:.1f} / {len(subjects) * 100}")
    print(f"Percentage: {percentage:.2f}%")
    print(f"Assigned Grade: {grade}")

if __name__ == "__main__":
    calculate_grade()
`,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming',
    description: 'Foundational language syntax, control structures, and computational thinking.',
    skills: [
      { name: 'Python', status: 'Learning', description: 'Syntax, functions, conditionals, input handling, and basic data processing' },
    ],
  },
  {
    title: 'Web Development',
    description: 'Core web standards for structuring, styling, and adding interactivity to interfaces.',
    skills: [
      { name: 'HTML', status: 'Familiar', description: 'Semantic markup, accessible document structure, and forms' },
      { name: 'CSS', status: 'Familiar', description: 'Box model, Flexbox, responsive layouts, and typography' },
      { name: 'JavaScript', status: 'Familiar', description: 'DOM manipulation, basic events, functions, and logic' },
    ],
  },
  {
    title: 'Artificial Intelligence',
    description: 'Exploration of machine intelligence fundamentals and modern generative models.',
    skills: [
      { name: 'Generative AI', status: 'Learning', description: 'Prompt construction, LLM fundamentals, and practical tool exploration' },
      { name: 'AI/ML Fundamentals', status: 'Exploring', description: 'Core principles of machine learning and problem formulation' },
    ],
  },
  {
    title: 'Methodology & Mindset',
    description: 'Practical approaches to problem solving, teamwork, and ongoing skill acquisition.',
    skills: [
      { name: 'Problem Solving', status: 'Active Focus', description: 'Breaking down requirements into logical, step-by-step algorithms' },
      { name: 'Hackathons', status: 'Active Focus', description: 'Brainstorming solutions and rapid building under time limitations' },
      { name: 'Ideathons', status: 'Active Focus', description: 'Concept ideation, structuring proposals, and collaborative teamwork' },
      { name: 'Continuous Learning', status: 'Active Focus', description: 'Actively studying new topics every week alongside B.Tech coursework' },
    ],
  },
];

export const ROADMAP_STAGES: RoadmapStage[] = [
  {
    phase: 1,
    title: 'B.Tech CSE (AI/ML)',
    tag: 'Current Semester',
    status: 'Current Academic Focus',
    description:
      'Pursuing first-semester studies in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning.',
    topics: ['Computer Science Fundamentals', 'Mathematics Foundation', 'Engineering Principles', 'Academic Exploration'],
  },
  {
    phase: 2,
    title: 'Programming Fundamentals',
    tag: 'Active Foundation',
    status: 'Foundational Work',
    description:
      'Developing strong coding intuition in Python through practical scripts, algorithmic challenges, and control-flow exercises.',
    topics: ['Python Syntax & Types', 'Functions & Scope', 'Conditionals & Loops', 'Basic File & Input Handling'],
  },
  {
    phase: 3,
    title: 'Web Development',
    tag: 'Active Learning',
    status: 'In Progress',
    description:
      'Learning the fundamentals of modern frontend web engineering to build clean, responsive, and functional user interfaces.',
    topics: ['Semantic HTML5', 'Responsive CSS & Layouts', 'JavaScript Fundamentals', 'Connecting UI to Logic'],
  },
  {
    phase: 4,
    title: 'Generative AI',
    tag: 'Active Exploration',
    status: 'Active Exploration',
    description:
      'Understanding how foundation models work, exploring prompt engineering techniques, and integrating AI into practical tools.',
    topics: ['LLM Principles', 'Prompt Engineering', 'API Integrations', 'Multimodal Concepts'],
  },
  {
    phase: 5,
    title: 'AI / Machine Learning',
    tag: 'Upcoming Focus',
    status: 'Upcoming Horizon',
    description:
      'Deepening mathematical and algorithmic understanding of machine learning algorithms, data preparation, and training workflows.',
    topics: ['Linear Algebra & Probability', 'Data Preprocessing', 'Supervised & Unsupervised Learning', 'Model Evaluation'],
  },
  {
    phase: 6,
    title: 'AI Engineering',
    tag: 'Long-Term Goal',
    status: 'Long-Term Vision',
    description:
      'Designing, developing, and deploying robust AI-powered applications that solve meaningful real-world challenges.',
    topics: ['AI System Architecture', 'Model Deployment', 'Reliable Systems Design', 'End-to-End Problem Solving'],
  },
];

export const HACKATHON_LESSONS: HackathonLesson[] = [
  {
    title: 'Thinking About Real-World Problems',
    description:
      'Hackathons force you out of theoretical textbook exercises and demand that you examine genuine human needs, user pain points, and practical constraints.',
    takeaway: 'Taught me to start with the problem statement before writing a single line of code.',
  },
  {
    title: 'Developing Ideas Under Time Constraints',
    description:
      'Working within strict hackathon countdowns requires prioritization, deciding which core features provide direct value and which belong in a backlog.',
    takeaway: 'Taught me time management and the importance of delivering a focused, working prototype.',
  },
  {
    title: 'Collaborating With Others',
    description:
      'Partnering with fellow students across different backgrounds helped me understand diverse perspectives, task delegation, and effective peer communication.',
    takeaway: 'Reinforced that building impactful software is fundamentally a team endeavor.',
  },
  {
    title: 'Presenting Solutions Clearly',
    description:
      'Ideathons gave me valuable practice in structuring concise proposals, articulating the rationale behind a design, and answering questions thoughtfully.',
    takeaway: 'Taught me that clear communication is just as vital as code execution.',
  },
  {
    title: 'Learning by Building',
    description:
      'Rather than just reading documentation passively, hackathons require immediate implementation, testing assumptions, and troubleshooting unexpected errors.',
    takeaway: 'Accelerated my learning speed more than passive study ever could.',
  },
];
