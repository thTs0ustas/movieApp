import { NextApiRequest, NextApiResponse } from 'next';

import { makeRequest } from '@/utils/make-request';
import { API_BASE_URL } from '@/config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;

    const response = await makeRequest(`${API_BASE_URL}/movies/${id}`);

    res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export default handler;
