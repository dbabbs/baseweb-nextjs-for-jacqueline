import * as React from 'react';
import {useStyletron} from 'baseui';
import {ButtonDock} from 'baseui/button-dock';
import {Button, KIND} from 'baseui/button';
import {HeadingLarge} from 'baseui/typography';
import {useState} from 'react';
import {Input} from 'baseui/input';
import Map, {Marker} from 'react-map-gl';
import {FloatingMarker} from 'baseui/map-marker';

export const sum = (a: number, b: number) => a + b;

const Index: React.FC = () => {
  const [css, theme] = useStyletron();

  const [name, setName] = useState('Dylan');
  const [viewport, setViewport] = useState({
    latitude: 37.768495131168336,
    longitude: -122.38856031220648,
    zoom: 14,
  });

  const uberHq = {
    latitude: 37.768495131168336,
    longitude: -122.38856031220648,
  };

  return (
    <div>
      <HeadingLarge>Hello, {name}</HeadingLarge>
      <div
        className={css({
          height: '500px',
          width: '100%',
          position: 'relative',
        })}
      >
        <Map
          mapboxAccessToken="<Mapbox access token>"
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{width: '100%', height: '100%'}}
          mapStyle="https://dyguxp1m9tbrw.cloudfront.net/style/santurce/web"
        >
          <Marker latitude={37.8} longitude={-122.4}>
            <FloatingMarker
              label="Uber HQ"
              // overrides={{
              //   Root: {
              //     style: () => ({
              //       transform: `translate(-50%, -50%)`,
              //     }),
              //   },
              // }}
            />
          </Marker>
        </Map>
      </div>
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Controlled Input"
        clearOnEscape
      />
      <ButtonDock
        primaryAction={<Button>Primary Action</Button>}
        secondaryActions={[
          <Button kind={KIND.secondary} key="first">
            Secondary Action 1
          </Button>,
          <Button kind={KIND.secondary} key="second">
            Secondary Action 2
          </Button>,
        ]}
        dismissiveAction={<Button kind={KIND.tertiary}>Dismiss</Button>}
      />{' '}
    </div>
  );
};

export default Index;
