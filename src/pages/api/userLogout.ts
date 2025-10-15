import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.setHeader(
      'Set-Cookie',
      'auth_token=deleted; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
    );

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json(error);
  }
};

export default handler;
