import Card from '../components/ui/card';
import Button from '../components/ui/button';
import AnimatedBackground from '../components/ui/AnimatedBackground';

const courses = [
  {
    name: 'Mathematics',
    description: 'This course covers fundamental mathematical concepts and problem-solving techniques.',
    icon: <FaBook className="w-12 h-12 text-blue-600" />
  },
  {
    name: 'Physics',
    description: 'Learn the basics of physics, including mechanics, thermodynamics, and electromagnetism.',
    icon: <FaRocket className="w-12 h-12 text-red-500" />
  },
  {
    name: 'Chemistry',
    description: 'A comprehensive course on chemistry, including organic and inorganic chemistry.',
    icon: <FaFlask className="w-12 h-12 text-green-500" />
  },
  {
    name: 'Biology',
    description: 'Explore the world of biology, covering cellular biology, genetics, and ecology.',
    icon: <FaSeedling className="w-12 h-12 text-emerald-600" />
  },
  {
    name: 'Computer Science',
    description: 'Dive into computer science, learning programming, algorithms, and data structures.',
    icon: <FaLaptopCode className="w-12 h-12 text-purple-600" />
  }
];

const Home = () => (
  <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen relative">
    <AnimatedBackground />
    <h1 className="text-5xl font-bold mb-6 text-gray-800 text-center">🚀 Welcome to Edvance</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <Card key={index} className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold">{course.icon} {course.name}</h3>
            <p>{course.description}</p>
            <Button className="mt-4">Explore Course</Button>
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default Home;
