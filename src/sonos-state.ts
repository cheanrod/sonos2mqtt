import { Track, ChannelValue } from '@svrooij/sonos/lib/models'
/**
 * Object that keeps the state of each device,
 * this is what is changed by the events and published to mqtt as a full object.
 *
 * @remarks If you want to add stuff also add it to the event handlers. 
 * @export
 * @interface SonosState
 */
export interface SonosState extends SonosStateBase {
  readonly uuid: string;
  ts: number;
  name: string;
  groupName: string;
  coordinatorUuid: string;
  volume: ChannelValue<number>;
  mute: ChannelValue<boolean>;
  currentTrack: Track;
  nextTrack: Track;
  enqueuedMetadata: Track;
  transportState: string;
  playmode: string;
  bass: number;
  treble: number;
  
}

interface SonosStateBase {
  [key: string]: string | number | Track | ChannelValue<number> | ChannelValue<boolean>;
}
