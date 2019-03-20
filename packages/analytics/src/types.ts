import { IGif } from '@giphy/js-types'

export type PingbackUser = {
    // if this is all we ever need about a user
    // we can just pass the id
    id?: number
}

export type Pingback = {
    gif: IGif
    user: PingbackUser
    type: PingbackType
    searchResponseId: string
    actionType: PingbackActionType
    position?: ClientRect
}

export type PingbackActionType = 'CLICK' | 'SEEN' | 'HOVER'

export type PingbackRequestAction = {
    action_type: PingbackActionType
    attributes: any
    gif_id: string
    tid?: string
    ts: number
}

export type PingbackType =
    | 'trending_carousel'
    | 'trending_grid'
    | 'related_grid'
    | 'channel_grid'
    | 'search_grid'
    | 'universal_search'
    | 'suggested_terms'
    | 'explore_grid'

export type EventType = 'GIF_TRENDING' | 'GIF_RELATED' | 'GIF_CHANNEL' | 'GIF_SEARCH' | 'GIF_EXPLORE'
