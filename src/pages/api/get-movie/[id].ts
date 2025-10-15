import { NextApiRequest, NextApiResponse } from 'next';

import { makeRequest } from '@/utils/make-request';
import { API_BASE_URL } from '@/config';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  const response = await makeRequest(`${API_BASE_URL}/movies/${id}`, {});

  res.json(response);
};

export default handler;
