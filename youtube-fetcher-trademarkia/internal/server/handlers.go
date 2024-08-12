package server

import (
    "encoding/json"
    "net/http"
    "strconv"
    "youtube-fetcher-trademarkia/internal/sqldatabase"

    _ "github.com/lib/pq"
)

type Video struct {
    VideoID      string `json:"video_id"`
    Title        string `json:"title"`
    Description  string `json:"description"`
    PublishedAt  string `json:"published_at"`
    ThumbnailURL string `json:"thumbnail_url"`
}

// Example of paginated videos handler
func GetPaginatedVideosHandler(w http.ResponseWriter, r *http.Request) {
    pageStr := r.URL.Query().Get("page")
    limitStr := r.URL.Query().Get("limit")

    page, err := strconv.Atoi(pageStr)
    if err != nil || page < 1 {
        page = 1
    }

    limit, err := strconv.Atoi(limitStr)
    if err != nil || limit < 1 {
        limit = 10
    }

    offset := (page - 1) * limit

    rows, err := database.DB.Query(`
        SELECT video_id, title, description, published_at, thumbnail_url 
        FROM videos 
        ORDER BY published_at DESC 
        LIMIT $1 OFFSET $2`,
        limit, offset,
    )
    if err != nil {
        http.Error(w, "Internal Server Error", http.StatusInternalServerError)
        return
    }
    defer rows.Close()

    var videos []Video
    for rows.Next() {
        var v Video
        if err := rows.Scan(&v.VideoID, &v.Title, &v.Description, &v.PublishedAt, &v.ThumbnailURL); err != nil {
            http.Error(w, "Internal Server Error", http.StatusInternalServerError)
            return
        }
        videos = append(videos, v)
    }

    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(videos)
}

// Function to fetch videos from the database with pagination
func fetchVideosFromDB(limit, offset int) ([]Video, error) {
    var videos []Video

    // Query to fetch paginated and sorted videos
    query := `
        SELECT video_id, title, description, published_at, thumbnail_url
        FROM videos
        ORDER BY published_at DESC
        LIMIT $1 OFFSET $2
    `
    rows, err := database.DB.Query(query, limit, offset)
    if err != nil {
        return nil, err
    }
    defer rows.Close()

    for rows.Next() {
        var video Video
        if err := rows.Scan(&video.VideoID, &video.Title, &video.Description, &video.PublishedAt, &video.ThumbnailURL); err != nil {
            return nil, err
        }
        videos = append(videos, video)
    }

    if err := rows.Err(); err != nil {
        return nil, err
    }

    return videos, nil
}
