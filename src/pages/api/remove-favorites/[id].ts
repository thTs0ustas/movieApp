import { NextApiRequest, NextApiResponse } from 'next';

import { API_BASE_URL } from '@/config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  const { auth_token } = req.cookies;

  try {
    const response = await fetch(`${API_BASE_URL}/movies/${id}/favorite`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...(auth_token ? { Authorization: `Bearer ${auth_token}` } : {}),
      },
    }).then((res) => res.json());

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
