package server

import (
	"encoding/json"
	"net/http"
	"strconv"
	database "youtube-fetcher-trademarkia/internal/sqldatabase"
)

func GetVideosHandler(w http.ResponseWriter, r *http.Request) {
	page, _ := strconv.Atoi(r.URL.Query().Get("page"))
	limit, _ := strconv.Atoi(r.URL.Query().Get("limit"))

	offset := (page - 1) * limit
	query := `
        SELECT video_id, title, description, publish_date, thumbnail_url 
        FROM videos 
        ORDER BY publish_date DESC 
        LIMIT $1 OFFSET $2;
    `
	rows, err := database.DB.Query(query, limit, offset)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	videos := []map[string]interface{}{}
	for rows.Next() {
		var videoID, title, description, publishDate, thumbnailURL string
		err = rows.Scan(&videoID, &title, &description, &publishDate, &thumbnailURL)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		video := map[string]interface{}{
			"video_id":      videoID,
			"title":         title,
			"description":   description,
			"publish_date":  publishDate,
			"thumbnail_url": thumbnailURL,
		}
		videos = append(videos, video)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(videos)
}

func SearchVideosHandler(w http.ResponseWriter, r *http.Request) {
	query := r.URL.Query().Get("q")

	searchQuery := `
        SELECT video_id, title, description, publish_date, thumbnail_url 
        FROM videos 
        WHERE title ILIKE '%' || $1 || '%' OR description ILIKE '%' || $1 || '%'
        ORDER BY publish_date DESC;
    `
	rows, err := database.DB.Query(searchQuery, query)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer rows.Close()

	videos := []map[string]interface{}{}
	for rows.Next() {
		var videoID, title, description, publishDate, thumbnailURL string
		err = rows.Scan(&videoID, &title, &description, &publishDate, &thumbnailURL)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		video := map[string]interface{}{
			"video_id":      videoID,
			"title":         title,
			"description":   description,
			"publish_date":  publishDate,
			"thumbnail_url": thumbnailURL,
		}
		videos = append(videos, video)
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(videos)
}
