import React from 'react';
import { Application } from '@pluginio/sdk';
export declare const Plugin: React.Context<Application>;
export declare function PluginProvider({ children }: any): JSX.Element;
export declare function usePlugin(): Application;
