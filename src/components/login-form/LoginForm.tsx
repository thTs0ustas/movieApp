import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { toast } from 'sonner';

import { useAppModelProps } from '@/store/hooks';
import { useLoginMutation } from '@/models/auth/services';
import type { LoginRequest } from '@/models/auth/types';
import { setUser } from '@/models/auth/actions';

import { usernameSchema, passwordSchema } from './validations';

export const LoginForm = () => {
  const router = useRouter();
  const { setUserAction } = useAppModelProps({
    setUserAction: setUser,
  });

  const [login, { isLoading }] = useLoginMutation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof LoginRequest, string>>
  >({});

  const isDisabled =
    isLoading ||
    !!formErrors.username ||
    !!formErrors.password ||
    !username ||
    !password;

  const handleSubmit = async () => {
    try {
      const userResponse = await login({
        username,
        password,
      }).unwrap();
      setUserAction({ ...userResponse, isLoggedIn: true });
      toast.success('Login successful');
      await router.push('/');
    } catch (error) {
      console.warn('Login failed:', error);
      return;
    }
  };

  return (
    <form className="mx-auto max-w-2xl">
      <div className="mb-5">
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Your username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            const result = usernameSchema.safeParse(e.target.value);
            if (!result.success) {
              const usernameErrors = result.error.issues[0].message;
              setFormErrors((prev) => ({
                ...prev,
                username: usernameErrors,
              }));
            } else {
              setFormErrors((prev) => ({ ...prev, username: '' }));
            }
          }}
          disabled={isLoading}
          autoComplete="username"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-50 dark:focus:ring-blue-500"
          required
        />
        {formErrors.username && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {formErrors.username}
          </p>
        )}
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          Your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          disabled={isLoading}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
            const result = passwordSchema.safeParse(e.target.value);
            if (!result.success) {
              const passwordErrors = result.error.issues[0].message;
              setFormErrors((prev) => ({
                ...prev,
                password: passwordErrors,
              }));
            } else {
              setFormErrors((prev) => ({ ...prev, password: '' }));
            }
          }}
          autoComplete="current-password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
        {formErrors.password && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            {formErrors.password}
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-label="Submit Login Form"
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Submit
      </button>
    </form>
  );
};
