import Head from 'next/head';

import { Layout } from '@/components/Layout';
import { LoginForm } from '@/components/login-form/LoginForm';

import type { NextPageWithLayout } from '../_app';

const SignInPage: NextPageWithLayout = () => (
  <div className="w-full grow">
    <Head>
      <title>Sign In - Example App</title>
      <meta name="description" content="Sign in to your account" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <h1 className="mb-10 text-center text-3xl font-bold underline">
      Log in to your account
    </h1>
    <LoginForm />
  </div>
);

SignInPage.getLayout = (page) => <Layout backButton>{page}</Layout>;

export default SignInPage;
