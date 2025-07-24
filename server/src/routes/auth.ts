import { Router, Request, Response } from 'express';
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import jwt, { SignOptions, Secret } from 'jsonwebtoken';

const router = Router();
const prisma = new PrismaClient();

// Register new user
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { email, username, password, fullName, school, grade } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        fullName,
        school,
        grade,
        role: 'STUDENT'
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        role: user.role,
        knowledgePoints: user.knowledgePoints,
        level: user.level
      },
      token
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login user
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        role: user.role,
        knowledgePoints: user.knowledgePoints,
        level: user.level
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Verify token
router.get('/verify', async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ error: 'No token provided' });
      return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret') as any;
    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId }
    });

    if (!user) {
      res.status(401).json({ error: 'Invalid token' });
      return;
    }

    res.json({
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullName: user.fullName,
        role: user.role,
        knowledgePoints: user.knowledgePoints,
        level: user.level
      }
    });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
});

// Register vendor
router.post('/register-vendor', async (req: Request, res: Response) => {
  try {
    const { email, username, password, fullName, businessName, businessType, contactPhone } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
          { username }
        ]
      }
    });

    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create vendor
    const vendor = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        fullName,
        businessName,
        businessType,
        contactPhone,
        role: 'VENDOR'
      },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        role: true,
        businessName: true,
        businessType: true,
        contactPhone: true
      }
    });

    // Generate JWT token
    const token = jwt.sign(
      { userId: vendor.id, role: String(vendor.role) },
      (process.env.JWT_SECRET as Secret) || 'fallback-secret',
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Vendor created successfully',
      user: vendor,
      token
    });
  } catch (error) {
    console.error('Vendor registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router; 