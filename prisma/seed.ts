// prisma/seed.ts
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
// initialize Prisma Client
const prisma = new PrismaClient();

const roundsOfHashing = 10;
async function main() {
  await prisma.topic.create({
    data: {
      name: 'Useful IT verbs',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'to back up',
            description:
              'To copy a file or record, to store it separately from the original, that can be used to recover the original if it is destroyed or damaged',
            level: 'B2',
          },
          {
            word: 'to compile',
            description:
              'To use a compiler to process source code and produce executable code',
            level: 'B2',
          },
          {
            word: 'to connect',
            description:
              'To join (to another object): to attach, or to be intended to attach or capable of attaching, to another object',
            level: 'B2',
          },
          {
            word: 'to decrypt',
            description:
              'To convert (an encrypted or coded message) back into plain text',
            level: 'B2',
          },
          {
            word: 'to initialize',
            description: 'To assign an initial value to a variable',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Software',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'a graphical user',
            description:
              'A type of user interface which allows people to interact with a computer through a metaphor of direct manipulation of graphical images and widgets in addition to text',
            level: 'B2',
          },
          {
            word: 'a plug-in',
            description:
              'A module or device that interacts with another to add a specific feature or function',
            level: 'B2',
          },
          {
            word: 'a template',
            description:
              'A physical object whose shape is used as a guide to make other objects',
            level: 'B2',
          },
          {
            word: 'a utility',
            description:
              'A software program designed to perform a single task or a small range of tasks, often to help manage and tune computer hardware, an operating system or application software',
            level: 'B2',
          },
          {
            word: 'open source',
            description:
              'software with source code that anyone can inspect, modify, and enhance',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Internet',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'a patch cord',
            description:
              'an insulated lead with a plug at each end, for use with a patchboard',
            level: 'B2',
          },
          {
            word: 'bandwidth',
            description:
              'The width, usually measured in hertz, of a frequency band',
            level: 'B2',
          },
          {
            word: 'cloud computing',
            description:
              'Computing services provided over the Internet (or "cloud"), whereby shared resources, software, and information are provided to computers and other devices on demand',
            level: 'B2',
          },
          {
            word: 'latency',
            description:
              'A delay, a period between the initiation of something and the occurrence',
            level: 'B2',
          },
          {
            word: 'media access control (MAC) address',
            description:
              'A unique identifier for an Ethernet or network adapter over a network',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Hardware',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'a motherboard',
            description:
              'The primary circuit board of a personal computer, containing the circuitry for the central processing unit, keyboard, mouse and monitor, together with slots for other devices',
            level: 'B2',
          },
          {
            word: 'a network card',
            description:
              'a piece of computer hardware designed to allow computers to communicate over a computer network',
            level: 'B2',
          },
          {
            word: 'air cooling',
            description:
              'a process of lowering air temperature by dissipating heat',
            level: 'B2',
          },
          {
            word: 'removable media',
            description:
              'any type of storage device that can be removed from a computer while the system is running',
            level: 'B2',
          },
          {
            word: 'Output devices',
            description:
              'any hardware device used to send data from a computer to another device or user',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'IT slang',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'code monkey',
            description:
              'someone who sits and programs all day; someone who is only valued for their programming skills',
            level: 'B2',
          },
          {
            word: 'geek',
            description:
              'an individual with a passion for computers, to the exclusion of other normal human interests',
            level: 'B2',
          },
          {
            word: 'killer app',
            description:
              'a piece of software which redefines the industry, often causing people to rush out and buy new hardware so they can use it',
            level: 'B2',
          },
          {
            word: 'spaghetti code',
            description:
              'a derogatory term for poorly organized programming code',
            level: 'B2',
          },
          {
            word: 'trendsetter',
            description:
              'someone who successfully defines a path for the rest of the industry to follow',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Basic IT',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'appliance',
            description:
              'An implement, an instrument or apparatus designed (or at least used) as a means to a specific end',
            level: 'B2',
          },
          {
            word: 'compatible',
            description: 'Something that is compatible with something else',
            level: 'B2',
          },
          {
            word: 'customer',
            description:
              'A patron, a client; one who purchases or receives a product or service from a business or merchant, or intends to do so',
            level: 'B2',
          },
          {
            word: 'database',
            description:
              'A collection of (usually) organized information in a regular structure, usually but not necessarily in a machine readable format accessible by a computer',
            level: 'B2',
          },
          {
            word: 'drawback',
            description:
              'A disadvantage; something that detracts or takes away',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Business English',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'employ',
            description:
              'The act of employing someone or making use of something',
            level: 'B2',
          },
          {
            word: 'environment',
            description:
              'The surroundings of, and influences on, a particular item of interest',
            level: 'B2',
          },
          {
            word: 'insurance',
            description:
              'A means of indemnity against a future occurrence of an uncertain event',
            level: 'B2',
          },
          {
            word: 'leadership',
            description: 'The capacity of someone to lead others',
            level: 'B2',
          },
          {
            word: 'negotiate',
            description:
              'To confer with others in order to come to terms or reach an agreement',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Freelance',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'order',
            description:
              'A request for some product or service; a commission to purchase, sell, or supply goods',
            level: 'B2',
          },
          {
            word: 'promote',
            description:
              'To raise (someone) to a more important, responsible, or remunerative job or rank',
            level: 'B2',
          },
          {
            word: 'remote',
            description:
              'An element of broadcast programming originating away from the stations or shows control room',
            level: 'B2',
          },
          {
            word: 'task',
            description: 'A piece of work done as part of ones duties',
            level: 'B2',
          },
          {
            word: 'vendor',
            description: 'A person or a company that vends or sells',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Database',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'database',
            description: 'A large quantity of indexed digital information',
            level: 'B2',
          },
          {
            word: 'Schema',
            description: 'A collection of one or more tables of data',
            level: 'B2',
          },
          {
            word: 'Report Distribution Management System, RDMS',
            description:
              'a software utility or set of scripts that commonly works in conjunction with a database for generating reports from a database',
            level: 'B2',
          },
          {
            word: 'data type',
            description:
              'a classification that dictates what a variable or object can hold in computer programming',
            level: 'B2',
          },
          {
            word: 'Server',
            description:
              'a software or hardware device that accepts and responds to requests made over a network',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Blockchain',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'Altcoin',
            description: 'Any cryptocurrency that is an alternative to Bitcoin',
            level: 'B2',
          },
          {
            word: 'Bear market',
            description:
              'A market in which prices fall and negative sentiment is rife; this could lead to a drop-off in demand while buyers wait for lower prices',
            level: 'B2',
          },
          {
            word: 'Casper',
            description:
              'Ethereums proof-of-stake protocol upgrade, designed to replace the proof-of-work as mentioned earlier and improve the scalability of the network while also enhancing security by making it less costly for an attacker to attack the network',
            level: 'B2',
          },
          {
            word: 'Cryptocurrency',
            description:
              'A form of digital asset that uses cryptography as its main security measure to control the creation of additional units and verify transactions on its decentralised network',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'Hackathon terms',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'Code Review',
            description:
              'This is a process where all codes are checked for quality. At hackathons, theres a specific time for code review, which is usually before the pitch',
            level: 'B2',
          },
          {
            word: 'GitHub',
            description:
              'This is a platform that they use to host the main source code for projects that are still under development. Registered users can contribute to other projects wherever they are. It also allows them to publicize their work',
            level: 'B2',
          },
          {
            word: 'Intellectual Property',
            description: 'This protects the work of the author',
            level: 'B2',
          },
          {
            word: 'Pitch',
            description:
              'a presentation of the product, business, or service. This is when hackathoners will sell their ideas. A pitch should last between three and five minutes',
            level: 'B2',
          },
          {
            word: 'Meetup',
            description:
              'Meetup falls under networking where individuals are encouraged to establish a relationship with the community',
            level: 'B2',
          },
        ],
      },
    },
  });
  await prisma.topic.create({
    data: {
      name: 'UI/UX design',
      level: 'B2',
      language: 'EN',
      definitions: {
        create: [
          {
            word: 'A/B testing, split testing',
            description:
              'comparing two versions of a web page with a single variable online to determine which one performs better',
            level: 'B2',
          },
          {
            word: 'Backlog',
            description: 'a list of tasks to be completed',
            level: 'B2',
          },
          {
            word: 'Clickstream',
            description: 'the path of clicks you took on it to accomplish a',
            level: 'B2',
          },
          {
            word: 'End User',
            description: 'The person for who we are designing the product',
            level: 'B2',
          },
          {
            word: 'Grid System',
            description:
              'organizational tools that help us arrange content on a screen made up of vertical and horizontal lines that create what we call columns and gutters',
            level: 'B2',
          },
        ],
      },
    },
  });
  const password = await bcrypt.hash('12345678admin', roundsOfHashing);
  const admin = await prisma.user.create({
    data: {
      name: 'Main Admin',
      email: 'superadmin@gmail.com',
      role: 'ADMIN',
      password: password,
    },
  });
  console.log(admin);

  await prisma.organization.create({
    data: {
      name: 'Speak Better English',
      email: 'speakbetter@gmail.com',
      phone: '+77777777777',
      city: 'Astana',
      address: 'Petrov St.16',
      industry: 'Education',
      announcements: {
        create: [
          {
            title: 'Speaking Club Weekend',
            description:
              'The Speaking Club is the best way to Practice Speaking in English and other languages Online in a real-life setting. Structured conversation groups with incredible hosts.',
            format: 'ONLINE',
            entryFee: 'free',
            date: '2023-06-10T10:30:24.398Z',
            link: 'https://us05web.zoom.us/j/81401172831?pwd=OUhuZnlqTmxCRjJNU3o4aTcvVWttQT09',
          },
        ],
      },
    },
  });
  await prisma.organization.create({
    data: {
      name: 'Eagilik Books & Coffee',
      email: 'eagilik@gmail.com',
      phone: '+77777777777',
      city: 'Astana',
      address: 'Kenesary St.61/1',
      industry: 'Education',
      announcements: {
        create: [
          {
            title: 'BSC Speaking Club',
            description:
              'Business Speaking Club (BSC) is a group of people engaged in a legal environment professionally and academically. The aim of conversations within the Club is to enhance the English skills of the participants and share and gain knowledge on the agenda topic.',
            format: 'OFFLINE',
            entryFee: 'free',
            date: '2023-06-10T10:30:24.398Z',
          },
        ],
      },
    },
  });
  await prisma.organization.create({
    data: {
      name: 'XPLORE',
      email: 'xplorebusiness@gmail.com',
      phone: '+77777777777',
      city: 'Astana',
      address: 'Saryarqa Avenue 28',
      industry: 'Training Center',
      announcements: {
        create: [
          {
            title: 'Speakful Club',
            description:
              'Speakful Club is structured in a cohort-based way, meaning you’ll be interacting with a cohort (i.e. group) of other students in real life. Cohort-based courses have been proven to facilitate learning and make it easier for students to comprehend what they’re being taught.',
            format: 'ONLINE',
            entryFee: '1000',
            date: '2023-06-10T10:30:24.398Z',
            link: 'https://us05web.zoom.us/j/81401172831?pwd=OUhuZnlqTmxCRjJNU3o4aTcvVWttQT09',
          },
        ],
      },
    },
  });
}

// execute the main function
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
