import { User, Session } from 'next-auth'
import { MouseEventHandler } from 'react';

export type FormState = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
};

export type ColumnProps = {
  title: string;
  links: Array<string>;
}

export interface ProjectInterface {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
    id: string;
    createdBy: {
      name: string;
      email: string;
      avatarUrl: string;
      id: string;
    };
}

export type Provider = {
  id: string;
  name: string;
  type: string;
  singinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | undefined;
}

export type Providers = Record<string, Provider>;

export interface UserProfile {
    id: string;
    name: string;
    email: string;
    description: string | null;
    avatarUrl: string;
    githubUrl: string | null;
    linkedinUrl: string | null;
    projects: {
      edges: { node: ProjectInterface }[];
      pageInfo: {
        hasPreviousPage: boolean;
        hasNextPage: boolean;
        startCursor: string;
        endCursor: string;
      };
    };
}

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
}

export interface ProjectForm {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
}

export type ProjectProps = {
  type: string,
  session: SessionInterface
}

export type FormFieldProps = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void
}

export type CustomFieldProps = {
  title: string;
  state: string;
  filters: Array<string>;
  setState: (value: string) => void
}

export type CustomButtonProps = {
  title: string;
  leftIcon?: string | null;
  rightIcon?: string | null;
  handleClick?: MouseEventHandler;
  isSubmitting?: boolean;
  type?: 'button' | 'submit';
  bgColor?: string;
  textColor?: string;
}