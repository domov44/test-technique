import { renderHook } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEntityQuery } from '../useEntityQuery';

jest.mock('@/api/people', () => ({
  usePersonQuery: jest.fn(() => ({ data: { name: 'Luke' }, isLoading: false, error: null })),
}));
jest.mock('@/api/planet', () => ({
  usePlanetQuery: jest.fn(() => ({ data: { name: 'Tatooine' }, isLoading: false, error: null })),
}));
jest.mock('@/api/species', () => ({
  useSpeciesQuery: jest.fn(() => ({ data: { name: 'Human' }, isLoading: false, error: null })),
}));
jest.mock('@/api/starship', () => ({
  useStarshipQuery: jest.fn(() => ({ data: { name: 'X-Wing' }, isLoading: false, error: null })),
}));
jest.mock('@/api/vehicle', () => ({
  useVehicleQuery: jest.fn(() => ({ data: { name: 'Speeder' }, isLoading: false, error: null })),
}));

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>
);

describe('useEntityQuery', () => {
  it('returns person data when type is "people"', () => {
    const { result } = renderHook(() => useEntityQuery('people', '1'), { wrapper });
    expect(result.current.data).toBeDefined();
    expect(result.current.data!.name).toBe('Luke');
  });

  it('throws on unknown type', () => {
    expect(() => renderHook(() => useEntityQuery('droids', '1'), { wrapper })).toThrow('Unknown entity type: droids');
  });
});