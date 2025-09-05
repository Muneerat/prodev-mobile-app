import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },


  searchGroup: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: "white",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 14,
    color: "#555",
  },
  searchControl: {
    fontSize: 16,
    color: "#333",
    paddingVertical: 4,
  },
  searchButton: {
    backgroundColor: "#ff385c", 
    borderRadius: 50,
    padding: 10,
    marginLeft: 8,
  },

  // 🎛 Filters
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  filterContainer: {
    alignItems: "center",
    marginHorizontal: 8,
    width: 72,
  },

  // 📄 Listings
  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 12,
  },
  paginationContainer: {
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  showMoreButton: {
    backgroundColor: "#ff385c",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
