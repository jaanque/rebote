import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoader = () => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
      <div className="App">
        {/* Hero Section Skeleton */}
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
          <Skeleton height={40} width={`80%`} style={{ marginBottom: '1rem' }} />
          <Skeleton height={20} width={`60%`} style={{ marginBottom: '2rem' }} />
          <div style={{ display: 'flex' }}>
            <Skeleton height={40} width={100} style={{ marginRight: '1rem' }} />
            <Skeleton height={40} width={100} />
          </div>
        </div>

        {/* WhatIsrebote Skeleton */}
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Skeleton height={30} width={`50%`} style={{ margin: '0 auto 1rem auto' }} />
          <Skeleton count={3} height={20} width={`70%`} style={{ margin: '0 auto 0.5rem auto' }} />
        </div>

        {/* How It Works Skeleton */}
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Skeleton height={30} width={`40%`} style={{ margin: '0 auto 1rem auto' }} />
          <Skeleton height={20} width={`30%`} style={{ margin: '0 auto 2rem auto' }} />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ textAlign: 'center', width: '30%' }}>
                <Skeleton circle={true} height={50} width={50} style={{ margin: '0 auto 0.5rem auto' }} />
                <Skeleton height={20} width={`80%`} style={{ margin: '0 auto 0.5rem auto' }} />
                <Skeleton height={15} width={`60%`} style={{ margin: '0 auto' }}/>
              </div>
            ))}
          </div>
        </div>

        {/* Moments Section Skeleton */}
        <div style={{ display: 'flex', padding: '2rem', alignItems: 'center' }}>
          <div style={{ flex: 1, paddingRight: '1rem' }}>
            <Skeleton height={300} />
          </div>
          <div style={{ flex: 1 }}>
            <Skeleton height={30} width={`60%`} style={{ marginBottom: '1rem' }} />
            <Skeleton count={3} height={20} style={{ marginBottom: '0.5rem' }} />
            <Skeleton height={20} width={`80%`} style={{ marginTop: '1rem' }} />
          </div>
        </div>

        {/* Spaces Section Skeleton */}
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Skeleton height={30} width={`40%`} style={{ margin: '0 auto 1rem auto' }} />
          <Skeleton height={20} width={`50%`} style={{ margin: '0 auto 2rem auto' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[...Array(9)].map((_, i) => (
              <div key={i} style={{ border: '1px solid #333', padding: '1rem', borderRadius: '8px' }}>
                <Skeleton circle={true} height={40} width={40} style={{ margin: '0 auto 0.5rem auto' }} />
                <Skeleton height={20} width={`70%`} style={{ margin: '0 auto' }} />
              </div>
            ))}
          </div>
        </div>

        {/* Host Your Space Skeleton */}
        <div style={{ height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '2rem', textAlign: 'center' }}>
          <Skeleton height={30} width={`50%`} style={{ marginBottom: '1rem' }} />
          <Skeleton height={20} width={`70%`} style={{ marginBottom: '0.5rem' }} />
          <Skeleton height={20} width={`60%`} style={{ marginBottom: '1rem' }} />
          <Skeleton height={40} width={150} />
        </div>

        {/* Testimonials Skeleton */}
        <div style={{ padding: '2rem' }}>
          <Skeleton height={30} width={`40%`} style={{ margin: '0 auto 1rem auto', textAlign: 'center' }} />
          <Skeleton height={20} width={`50%`} style={{ margin: '0 auto 2rem auto', textAlign: 'center' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ border: '1px solid #333', padding: '1rem', borderRadius: '8px' }}>
                <Skeleton count={2} height={15} style={{ marginBottom: '0.5rem' }} />
                <Skeleton height={15} width={`50%`} style={{ marginBottom: '1rem' }} />
                <div style={{ display: 'flex' }}>
                  {[...Array(5)].map((_, j) => <Skeleton key={j} circle={true} height={20} width={20} style={{ marginRight: '0.2rem' }} />)}
                </div>
              </div>
            ))}
          </div>
          <Skeleton height={20} width={`60%`} style={{ margin: '2rem auto 0 auto', display: 'block', textAlign: 'center' }} />
        </div>

        {/* Why rebote Exists Skeleton */}
         <div style={{ padding: '2rem', textAlign: 'center' }}>
          <Skeleton height={30} width={`60%`} style={{ margin: '0 auto 1rem auto' }} />
          <Skeleton count={2} height={20} width={`80%`} style={{ margin: '0 auto 0.5rem auto' }} />
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '2rem' }}>
            {[1, 2, 3].map(i => (
              <div key={i} style={{ textAlign: 'center', width: '30%' }}>
                <Skeleton circle={true} height={30} width={30} style={{ margin: '0 auto 0.5rem auto' }} />
                <Skeleton height={20} width={`80%`} style={{ margin: '0 auto 0.5rem auto' }} />
                <Skeleton count={2} height={15} width={`70%`} style={{ margin: '0 auto' }}/>
              </div>
            ))}
          </div>
          <Skeleton count={2} height={20} width={`70%`} style={{ margin: '2rem auto 0 auto' }} />
        </div>

        {/* FAQ Skeleton */}
        <div style={{ padding: '2rem' }}>
          <Skeleton height={30} width={`30%`} style={{ margin: '0 auto 1rem auto', textAlign: 'center' }} />
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{ marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
              <Skeleton height={20} width={`70%`} />
            </div>
          ))}
          <Skeleton height={20} width={`20%`} style={{ margin: '1rem auto 0 auto', display: 'block', textAlign: 'center' }} />
        </div>

        {/* Footer Skeleton */}
        <div style={{ padding: '2rem', borderTop: '1px solid #333', marginTop: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <Skeleton height={20} width={100} style={{ marginBottom: '0.5rem' }}/>
              <Skeleton height={15} width={150} />
            </div>
            <div style={{ display: 'flex' }}>
              <Skeleton circle={true} height={30} width={30} style={{ marginRight: '0.5rem' }} />
              <Skeleton circle={true} height={30} width={30} style={{ marginRight: '0.5rem' }} />
              <Skeleton circle={true} height={30} width={30} />
            </div>
          </div>
        </div>

      </div>
    </SkeletonTheme>
  );
};

export default SkeletonLoader;
