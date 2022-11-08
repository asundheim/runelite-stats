export interface IBingoTile {
    tier1_points: number;
    tier2_points: number;
    tier3_points: number;
    image: string;
    hasPoints: boolean;
    points_reversed: boolean;
    display_name: string;
    row: number;
    column: number;
}
