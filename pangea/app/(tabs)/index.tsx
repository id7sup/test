import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête avec localisation et profil */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={24} color="gray" />
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationTitle}>Localisation</Text>
            <Text style={styles.locationAddress}>1 Rue Saint-Laud, 49000 Angers</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Image
            source={{ uri: 'https://placekitten.com/50/50' }} // Remplace par l'URL de la photo de profil
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Contenu principal (flux) */}
      <ScrollView contentContainerStyle={styles.feed}>
        {/* Publication exemple */}
        <View style={styles.postContainer}>
          <View style={styles.postHeader}>
            <Image
              source={{ uri: 'https://placekitten.com/40/40' }} // Image de profil utilisateur
              style={styles.profileImage}
            />
            <Text style={styles.username}>username1</Text>
          </View>
          <Image
            source={{ uri: 'https://placekitten.com/400/400' }} // Image de publication
            style={styles.postImage}
          />
          <View style={styles.postFooter}>
            <View style={styles.actionsContainer}>
              <TouchableOpacity>
                <FontAwesome name="heart-o" size={24} color="black" style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="comment-o" size={24} color="black" style={styles.actionIcon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome name="share" size={24} color="black" style={styles.actionIcon} />
              </TouchableOpacity>
            </View>
            <Text style={styles.likesText}>18 likes</Text>
          </View>
          <Text style={styles.caption}>
            <Text style={styles.username}>username1 </Text>
            Une description de la publication.
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewComments}>Voir tous les commentaires</Text>
          </TouchableOpacity>
        </View>

        {/* Charger plus de publications */}
        <TouchableOpacity style={styles.loadMoreButton}>
          <Text style={styles.loadMoreText}>Charger plus de publications</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Barre de navigation en bas */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="home" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="plus-square-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="heart-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="user-o" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationTextContainer: {
    marginLeft: 8,
  },
  locationTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  locationAddress: {
    fontSize: 12,
    color: 'gray',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  feed: {
    paddingVertical: 10,
  },
  postContainer: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    backgroundColor: '#ffffff',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  username: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  postFooter: {
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  actionIcon: {
    marginRight: 15,
  },
  likesText: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
  caption: {
    paddingHorizontal: 10,
    paddingTop: 5,
    fontSize: 14,
    color: '#333',
  },
  viewComments: {
    paddingHorizontal: 10,
    paddingTop: 5,
    fontSize: 12,
    color: 'gray',
  },
  loadMoreButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  loadMoreText: {
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#ffffff',
  },
});

