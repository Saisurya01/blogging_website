const blogData = [
  {
    id: 1,
    title: "The Future of Web Development in 2025",
    category: "Technology",
    previewDescription: "Web development is evolving faster than ever. Let’s explore the trends that will define the future.",
    content:
      "Web development in 2025 is shaped by performance, accessibility, and developer experience. Frameworks like React continue to evolve, while AI-assisted coding, server components, and edge computing are changing how applications are built and deployed."
  },
  {
    id: 2,
    title: "Why React Is Still the Best Choice for Modern UIs",
    category: "Technology",
    previewDescription: "React remains a top choice for building scalable and maintainable user interfaces.",
    content:
      "React’s component-based architecture, strong ecosystem, and active community make it a reliable choice. Features like hooks and concurrent rendering help developers write cleaner and more efficient code."
  },
  {
    id: 3,
    title: "Understanding JavaScript Closures the Simple Way",
    category: "Programming",
    previewDescription: "Closures are powerful but often confusing. This guide breaks them down clearly.",
    content:
      "A closure allows a function to access variables from its outer scope even after that scope has finished execution. This concept is widely used in React, event handlers, and asynchronous code."
  },
  {
    id: 4,
    title: "How to Structure a Scalable React Project",
    category: "Programming",
    previewDescription: "Good project structure makes your React app easier to scale and maintain.",
    content:
      "A scalable React project uses a clear folder structure, separation of concerns, reusable components, and consistent naming. Organizing by features instead of file types is often more effective."
  },
  {
    id: 5,
    title: "UI Design Principles Every Developer Should Know",
    category: "Design",
    previewDescription: "You don’t need to be a designer to build beautiful interfaces.",
    content:
      "Understanding spacing, typography, color contrast, and alignment can dramatically improve your UI. Simple design principles help developers create clean and user-friendly layouts."
  },
  {
    id: 6,
    title: "Minimalism in Web Design: Why Less Is More",
    category: "Design",
    previewDescription: "Minimal design improves usability and focuses attention on content.",
    content:
      "Minimalist web design removes unnecessary elements, uses whitespace effectively, and emphasizes readability. This approach works especially well for blogs and content-focused websites."
  },
  {
    id: 7,
    title: "Getting Started With Blogging as a Developer",
    category: "Lifestyle",
    previewDescription: "Blogging can improve your skills and build your personal brand.",
    content:
      "Writing about what you learn helps reinforce knowledge and share value with others. Developers who blog often improve communication skills and create new career opportunities."
  },
  {
    id: 8,
    title: "How Consistent Writing Improves Your Thinking",
    category: "Lifestyle",
    previewDescription: "Writing regularly sharpens clarity and understanding.",
    content:
      "Consistent writing forces you to organize your thoughts and explain ideas clearly. Over time, this habit improves problem-solving and critical thinking skills."
  },
  {
    id: 9,
    title: "What Is Clean Code and Why It Matters",
    category: "Programming",
    previewDescription: "Clean code is easier to read, maintain, and scale.",
    content:
      "Clean code focuses on readability, meaningful naming, small functions, and simplicity. Writing clean code saves time and reduces bugs in the long run."
  },
  {
    id: 10,
    title: "State Management in React: Do You Really Need Redux?",
    category: "Technology",
    previewDescription: "Modern React offers simpler alternatives to heavy state libraries.",
    content:
      "With hooks, context API, and server state tools, many apps no longer require Redux. Choosing the right state solution depends on app complexity and team size."
  },
  {
    id: 11,
    title: "Improving Website Performance Without Over-Optimization",
    category: "Technology",
    previewDescription: "Performance improvements should be practical and measurable.",
    content:
      "Lazy loading, image optimization, and code splitting provide major performance gains. Avoid premature optimization and focus on real user experience metrics."
  },
  {
    id: 12,
    title: "The Importance of Accessibility in Web Applications",
    category: "Design",
    previewDescription: "Accessible websites reach more users and provide better experiences.",
    content:
      "Accessibility ensures that people with disabilities can use your site. Simple steps like proper contrast, keyboard navigation, and semantic HTML make a big difference."
  },
  {
    id: 13,
    title: "Building a Blog With React: A Practical Guide",
    category: "Technology",
    previewDescription: "Learn how to plan and build a complete blogging platform.",
    content:
      "A React blog typically includes routing, reusable components, mock or API-driven data, and clean UI design. Planning your pages and components early saves development time."
  },
  {
    id: 14,
    title: "Why Every Developer Should Learn Basic Design",
    category: "Design",
    previewDescription: "Design knowledge helps developers build better products.",
    content:
      "Even basic design understanding allows developers to create interfaces that feel balanced and professional. This skill improves collaboration with designers."
  },
  {
    id: 15,
    title: "From Side Project to Portfolio: Showcasing Your Work",
    category: "Career",
    previewDescription: "Your projects can be your strongest resume.",
    content:
      "Well-documented side projects demonstrate real-world skills. A clean portfolio with thoughtful explanations can stand out more than certificates."
  },
  {
    id: 16,
    title: "How Reading Blogs Makes You a Better Developer",
    category: "Lifestyle",
    previewDescription: "Learning from others accelerates your growth.",
    content:
      "Reading developer blogs exposes you to new ideas, tools, and perspectives. It helps you stay current and avoid common mistakes."
  },
  {
    id: 17,
    title: "Choosing the Right Font for a Blogging Website",
    category: "Design",
    previewDescription: "Typography plays a major role in readability.",
    content:
      "Fonts affect how users perceive and read content. Choosing a clean, readable typeface improves user experience and keeps readers engaged longer."
  },
  {
    id: 18,
    title: "Why Consistency Matters in Web UI Design",
    category: "Design",
    previewDescription: "Consistent UI builds trust and improves usability.",
    content:
      "Consistency in spacing, colors, and components helps users navigate easily. It also makes your application feel polished and professional."
  },
  {
    id: 19,
    title: "Simple Home-Cooked Meals for Busy Weekdays",
    category: "Food",
    previewDescription: "Healthy and easy meals you can prepare at home without spending hours in the kitchen.",
    content:
      "Home-cooked meals do not have to be complicated. With simple ingredients, basic planning, and smart cooking techniques, you can prepare nutritious meals even on the busiest weekdays."
  },
  {
    id: 20,
    title: "Understanding Balanced Nutrition for Everyday Life",
    category: "Food",
    previewDescription: "A practical guide to eating well without following extreme diets.",
    content:
      "Balanced nutrition focuses on including the right portions of carbohydrates, proteins, fats, vitamins, and minerals. Instead of restrictions, it encourages mindful and sustainable eating habits."
  },
  {
    id: 21,
    title: "Daily Fitness Habits That Improve Long-Term Health",
    category: "Fitness",
    previewDescription: "Small daily fitness routines that make a big difference over time.",
    content:
      "Consistency matters more than intensity when it comes to fitness. Simple habits like walking, stretching, and short workouts can significantly improve strength, mobility, and overall health."
  },
  {
    id: 22,
    title: "Beginner’s Guide to Starting a Workout Routine",
    category: "Fitness",
    previewDescription: "How to build a fitness routine that fits your lifestyle and goals.",
    content:
      "Starting a workout routine can feel overwhelming. Begin with realistic goals, focus on proper form, and gradually increase intensity to avoid burnout and injuries."
  },
  {
    id: 23,
    title: "How Nutrition and Exercise Work Together",
    category: "Fitness",
    previewDescription: "Why combining good food and regular movement leads to better results.",
    content:
      "Nutrition fuels your workouts, while exercise helps your body use nutrients effectively. Together, they create a strong foundation for energy, recovery, and long-term wellness."
  }
];

export default blogData;
