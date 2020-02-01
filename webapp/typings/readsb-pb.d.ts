// Part of readsb, a Mode-S/ADSB/TIS message decoder.
//
// readsb-pb.d.ts: Typescript definitions for readsb-pb.ts.
//
// Copyright (c) 2020 Michael Wolf <michael@mictronics.de>
//
// This file is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// any later version.
//
// This file is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
// General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
declare namespace READSB {
    export interface INavModes {
        althold?: boolean;
        approach?: boolean;
        autopilot?: boolean;
        lnav?: boolean;
        tcas?: boolean;
        vnav?: boolean;
    }

    export interface IValidSource {
        alt_geom?: boolean;
        altitude?: boolean;
        baro_rate?: boolean;
        callsign?: boolean;
        emergency?: boolean;
        geom_rate?: boolean;
        gs?: boolean;
        gva?: boolean;
        ias?: boolean;
        lat?: boolean;
        lon?: boolean;
        mach?: boolean;
        mag_heading?: boolean;
        nac_p?: boolean;
        nac_v?: boolean;
        nav_altitude_fms?: boolean;
        nav_altitude_mcp?: boolean;
        nav_heading?: boolean;
        nav_modes?: boolean;
        nav_qnh?: boolean;
        nic?: boolean;
        nic_baro?: boolean;
        rc?: boolean;
        roll?: boolean;
        sda?: boolean;
        sil?: boolean;
        sil_type?: boolean;
        squawk?: boolean;
        tas?: boolean;
        track?: boolean;
        track_rate?: boolean;
        true_heading?: boolean;
    }

    export interface IAircraftMeta {
        addr?: number;
        addr_type?: eAddrType;
        air_ground?: eAirGround;
        alert?: boolean;
        alt_baro?: number;
        alt_geom?: number;
        baro_rate?: number;
        category?: number;
        emergency?: eEmergency;
        flight?: string;
        geom_rate?: number;
        gs?: number;
        gva?: number;
        ias?: number;
        lat?: number;
        lon?: number;
        mach?: number;
        mag_heading?: number;
        messages?: number;
        mlat?: IValidSource;
        nac_p?: number;
        nac_v?: number;
        nav_altitude_fms?: number;
        nav_altitude_mcp?: number;
        nav_heading?: number;
        nav_modes?: INavModes;
        nav_qnh?: number;
        nic?: number;
        nic_baro?: number;
        rc?: number;
        roll?: number;
        rssi?: number;
        sda?: number;
        seen?: number;
        seen_pos?: number;
        sil?: number;
        sil_type?: eSilType;
        spi?: boolean;
        squawk?: number;
        tas?: number;
        tisb?: IValidSource;
        track?: number;
        track_rate?: number;
        true_heading?: number;
        version?: number;
    }

    export interface IAircraftsUpdate {
        now?: number;
        messages?: number;
        aircraft?: IAircraftMeta[];
    }

    export interface IReceiver {
        version?: string;
        refresh?: number;
        latitude?: number;
        longitude?: number;
        history?: number;
    }

    export interface IStatisticEntry {
        altitude_suppressed?: number;
        cpr_airborne?: number;
        cpr_filtered?: number;
        cpr_global_bad?: number;
        cpr_global_ok?: number;
        cpr_global_range?: number;
        cpr_global_skipped?: number;
        cpr_global_speed?: number;
        cpr_local_aircraft_relative?: number;
        cpr_local_ok?: number;
        cpr_local_range?: number;
        cpr_local_receiver_relative?: number;
        cpr_local_skipped?: number;
        cpr_local_speed?: number;
        cpr_surface?: number;
        cpu_background?: number;
        cpu_demod?: number;
        cpu_reader?: number;
        local_bad?: number;
        local_modeac?: number;
        local_modes?: number;
        local_noise?: number;
        local_peak_signal?: number;
        local_samples_dropped?: number;
        local_samples_processed?: number;
        local_signal?: number;
        local_strong_signals?: number;
        local_unknown_icao?: number;
        max_distance_in_metres?: number;
        max_distance_in_nautical_miles?: number;
        messages?: number;
        remote_bad?: number;
        remote_modeac?: number;
        remote_modes?: number;
        remote_unknown_icao?: number;
        start?: number;
        stop?: number;
        tracks_all?: number;
        tracks_single_message?: number;
    }

    export interface IStatistics {
        latest?: IStatisticEntry;
        last_1min?: IStatisticEntry;
        last_5min?: IStatisticEntry;
        last_15min?: IStatisticEntry;
        total?: IStatisticEntry;
    }
}