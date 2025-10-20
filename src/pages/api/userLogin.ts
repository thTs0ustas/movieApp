import { NextApiRequest, NextApiResponse } from 'next';

import { makeRequest } from '@/utils/make-request';
import { API_BASE_URL } from '@/config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, password } = req.body;

  try {
    const response = await makeRequest(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    res.setHeader(
      'Set-Cookie',
      `auth_token=${response.token!}; Path=/; HttpOnly; Secure; SameSite=Lax`,
    );

    res.status(200).json(response);
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json(error);
  }
};

export default handler;
