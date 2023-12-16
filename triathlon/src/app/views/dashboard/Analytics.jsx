import { Card, Grid, styled, useTheme } from '@mui/material';
import { Fragment } from 'react';
import Campaigns from './shared/Campaigns';
import DoughnutChart from './shared/Doughnut';
import RowCards from './shared/RowCards';
import StatCards from './shared/StatCards';
import StatCards2 from './shared/StatCards2';
import TopSellingTable from './shared/TopSellingTable';
import UpgradeCard from './shared/UpgradeCard';
import Brand from 'app/components/Brand';
import SearchIcon from './search.svg';

const Analytics = () => {
  const { palette } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '30vh',
        background: '#f2f2f2',
        padding: '2rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '2rem'
        }}
      >
        <Brand />
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
          <input
            type="text"
            placeholder="Search..."
            style={{
              marginRight: '0.5rem',
              padding: '0.5rem',
              border: 'none',
              borderRadius: '0.25rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              background: '#fff',
              fontSize: '1rem',
              width: '50rem',
              height: '3rem'
            }}
          />
          <img src={SearchIcon} alt="search" />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
